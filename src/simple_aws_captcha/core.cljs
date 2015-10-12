(ns simple-aws-captcha.core
  (:require [cljs-lambda.util :refer [async-lambda-fn]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn get-code [x]
  (take x (shuffle (seq "abcdefghijklmnopqrstuvwxyz0123456789"))))

(def ^:export get-captcha
  (async-lambda-fn
   (fn [{:keys [variety]} context]
     (go
       (hash-map :code (get-code 4))))))
