(ns simple-aws-captcha.core
  (:require [cljs-lambda.util :refer [async-lambda-fn]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn get-code
  ([] (take 4 (shuffle (seq "abcdefghijklmnopqrstuvwxyz0123456789"))))
  ([len] (take len (shuffle (seq "abcdefghijklmnopqrstuvwxyz0123456789")))))

(def ^:export get-captcha
  (async-lambda-fn
   (fn [{:keys [code]} context]
     (go
       (hash-map :code (get-code 4))))))
