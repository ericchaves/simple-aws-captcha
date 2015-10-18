(ns simple-aws-captcha.core
  (:require [cljs-lambda.util :refer [async-lambda-fn]]
            [cljs.nodejs :as node]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn exec [cmd]
  (let [ch (async/chan)
        ps (node/require "child_process")]
    (.exec ps cmd (fn [err stdout]
                    (if (nil? err)
                      (async/put! ch stdout)
                      (async/put! ch "error")
                      )))
    ch))

(defn get-code
  "returns a random code sequence"
  [& {:keys [size chars]
      :or {size 4 chars "abcdhknrstuvxz23456789"}}]
  (take size (shuffle (seq chars))))

(defn get-image
  "returns png image for a given code"
  ([code] true))

(def ^:export get-captcha
  (async-lambda-fn
   (fn [{:keys [code]} context]
     (go
       (hash-map :code (get-code 4))))))
