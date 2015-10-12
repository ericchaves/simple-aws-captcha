(ns simple-aws-captcha.core-test
  (:require [cljs.test :refer-macros [deftest is testing async run-tests]]
            [simple-aws-captcha.core :refer [get-code]]))

(enable-console-print!)

(deftest smoking-test
  (testing "should work"
    (is (= true true))))
