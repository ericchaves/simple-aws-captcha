(ns simple-aws-captcha.testrunner
  (:require [cljs-testrunners.node :as node]))

(defn main []
  (node/run-tests 'simple-aws-captch.core-tests))

(set! *main-cli-fn* main)
