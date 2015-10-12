// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7529_7541 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7530_7542 = null;
var count__7531_7543 = (0);
var i__7532_7544 = (0);
while(true){
if((i__7532_7544 < count__7531_7543)){
var f_7545 = cljs.core._nth.call(null,chunk__7530_7542,i__7532_7544);
cljs.core.println.call(null,"  ",f_7545);

var G__7546 = seq__7529_7541;
var G__7547 = chunk__7530_7542;
var G__7548 = count__7531_7543;
var G__7549 = (i__7532_7544 + (1));
seq__7529_7541 = G__7546;
chunk__7530_7542 = G__7547;
count__7531_7543 = G__7548;
i__7532_7544 = G__7549;
continue;
} else {
var temp__4425__auto___7550 = cljs.core.seq.call(null,seq__7529_7541);
if(temp__4425__auto___7550){
var seq__7529_7551__$1 = temp__4425__auto___7550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7529_7551__$1)){
var c__5409__auto___7552 = cljs.core.chunk_first.call(null,seq__7529_7551__$1);
var G__7553 = cljs.core.chunk_rest.call(null,seq__7529_7551__$1);
var G__7554 = c__5409__auto___7552;
var G__7555 = cljs.core.count.call(null,c__5409__auto___7552);
var G__7556 = (0);
seq__7529_7541 = G__7553;
chunk__7530_7542 = G__7554;
count__7531_7543 = G__7555;
i__7532_7544 = G__7556;
continue;
} else {
var f_7557 = cljs.core.first.call(null,seq__7529_7551__$1);
cljs.core.println.call(null,"  ",f_7557);

var G__7558 = cljs.core.next.call(null,seq__7529_7551__$1);
var G__7559 = null;
var G__7560 = (0);
var G__7561 = (0);
seq__7529_7541 = G__7558;
chunk__7530_7542 = G__7559;
count__7531_7543 = G__7560;
i__7532_7544 = G__7561;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7562 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4624__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4624__auto__)){
return or__4624__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7562);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7562)))?cljs.core.second.call(null,arglists_7562):arglists_7562));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7534 = null;
var count__7535 = (0);
var i__7536 = (0);
while(true){
if((i__7536 < count__7535)){
var vec__7537 = cljs.core._nth.call(null,chunk__7534,i__7536);
var name = cljs.core.nth.call(null,vec__7537,(0),null);
var map__7538 = cljs.core.nth.call(null,vec__7537,(1),null);
var map__7538__$1 = ((cljs.core.seq_QMARK_.call(null,map__7538))?cljs.core.apply.call(null,cljs.core.hash_map,map__7538):map__7538);
var doc = cljs.core.get.call(null,map__7538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7563 = seq__7533;
var G__7564 = chunk__7534;
var G__7565 = count__7535;
var G__7566 = (i__7536 + (1));
seq__7533 = G__7563;
chunk__7534 = G__7564;
count__7535 = G__7565;
i__7536 = G__7566;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7533);
if(temp__4425__auto__){
var seq__7533__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7533__$1)){
var c__5409__auto__ = cljs.core.chunk_first.call(null,seq__7533__$1);
var G__7567 = cljs.core.chunk_rest.call(null,seq__7533__$1);
var G__7568 = c__5409__auto__;
var G__7569 = cljs.core.count.call(null,c__5409__auto__);
var G__7570 = (0);
seq__7533 = G__7567;
chunk__7534 = G__7568;
count__7535 = G__7569;
i__7536 = G__7570;
continue;
} else {
var vec__7539 = cljs.core.first.call(null,seq__7533__$1);
var name = cljs.core.nth.call(null,vec__7539,(0),null);
var map__7540 = cljs.core.nth.call(null,vec__7539,(1),null);
var map__7540__$1 = ((cljs.core.seq_QMARK_.call(null,map__7540))?cljs.core.apply.call(null,cljs.core.hash_map,map__7540):map__7540);
var doc = cljs.core.get.call(null,map__7540__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7540__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7571 = cljs.core.next.call(null,seq__7533__$1);
var G__7572 = null;
var G__7573 = (0);
var G__7574 = (0);
seq__7533 = G__7571;
chunk__7534 = G__7572;
count__7535 = G__7573;
i__7536 = G__7574;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map