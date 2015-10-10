(ns simple-aws-captcha.core
  (:require [cljs-lambda.util :refer [async-lambda-fn]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def ^:export simple-captcha
  (async-lambda-fn
   (fn [{:keys [variety]} context]
     (go
       (js/Error (str "Sorry, I don't yet know how to work: '" variety "' magic"))))))
