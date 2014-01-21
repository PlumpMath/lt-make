if(!lt.util.load.provided_QMARK_('lt.plugins.make')) {
goog.provide('lt.plugins.make');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');

lt.plugins.make.exec = lt.util.load.node_module.call(null,"shelljs").exec;

lt.plugins.make.make_current_project = (function make_current_project(target){var editor = lt.objs.editor.pool.last_active.call(null);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));var makefile = lt.objs.files.walk_up_find.call(null,path,"Makefile");if(cljs.core.truth_(makefile))
{return lt.plugins.make.exec.call(null,[cljs.core.str("make --directory "),cljs.core.str(lt.objs.files.parent.call(null,makefile)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(target))].join(''),(function (code,output){return cljs.core.println.call(null,clojure.string.join.call(null,"\n",cljs.core.drop_last.call(null,2,cljs.core.rest.call(null,output.split("\n")))));
}));
} else
{return null;
}
});

lt.plugins.make.targets = (function targets(editor){var lines = cljs.core.map.call(null,(function (p1__8853_SHARP_){return lt.objs.editor.line.call(null,editor,p1__8853_SHARP_);
}),cljs.core.range.call(null,lt.objs.editor.first_line.call(null,editor),(lt.objs.editor.last_line.call(null,editor) + 1)));return cljs.core.map.call(null,(function (p1__8854_SHARP_){return cljs.core.first.call(null,clojure.string.split.call(null,p1__8854_SHARP_,/:/,2));
}),cljs.core.filter.call(null,(function (p1__8855_SHARP_){return cljs.core.re_find.call(null,/^\w+:/,p1__8855_SHARP_);
}),lines));
});

lt.plugins.make.make_target_selector = lt.objs.sidebar.command.filter_list.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return cljs.core.map.call(null,(function (p1__8856_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949)],[p1__8856_SHARP_]);
}),lt.plugins.make.targets.call(null,lt.objs.editor.pool.last_active.call(null)));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Make target"], null));

lt.plugins.make.__BEH__on_target_select = (function __BEH__on_target_select(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.make","on-target-select","lt.plugins.make/on-target-select",577773794),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.make.__BEH__on_target_select,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));

lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"make","make",1017248096),new cljs.core.Keyword(null,"desc","desc",1016984067),"Make: Execute make target for this project",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.make.make_target_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.make.make_current_project], null));

}

//# sourceMappingURL=