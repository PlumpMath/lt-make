(ns lt.plugins.make
  "Make for Light Table"
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.proc :as proc]
            [lt.objs.popup :as popup]
            [lt.objs.notifos :as notifos]
            [lt.objs.sidebar.command :as cmd]
            [lt.util.dom :as dom]
            [lt.util.load :as load]

            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior defui]]))

(def exec (.-exec (load/node-module "shelljs")))

(defn make-current-project [target]
  (let [editor (pool/last-active)
        path (-> @editor :info :path)
        makefile (files/walk-up-find path "Makefile")]
    (when makefile
      (exec (str "make --directory " (files/parent makefile) " " (:name target))
            (fn [code output]
              (println (->> (.split output "\n") rest (drop-last 2) (string/join "\n"))))))))

(defn targets [editor]
  (let [lines (map #(ed/line editor %) (range (ed/first-line editor) (inc (ed/last-line editor))))]
    (map #(first (string/split % #":" 2))
         (filter #(re-find #"^\w+:" %)
                 lines))))

(def make-target-selector
  (cmd/filter-list {:items (fn []
                             (map #(hash-map :name %)
                                  (targets (pool/last-active))))
                    :key :name
                    :placeholder "Make target"}))

(behavior ::on-target-select
          :triggers #{:select}
          :reaction (fn [this v]
                      (cmd/exec-active! v)))

(cmd/command {:command :make
              :desc "Make: Execute make target for this project"
              :options make-target-selector
              :exec make-current-project})