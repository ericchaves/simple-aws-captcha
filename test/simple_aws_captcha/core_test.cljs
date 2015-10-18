(ns simple-aws-captcha.core-test
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.test :refer-macros [deftest is testing async run-tests]]
            [cljs.core.async :refer [>! <! chan put! take! timeout close!]]
            [simple-aws-captcha.core :refer [get-code get-image exec]]))

(enable-console-print!)

(deftest smoking-test
  (testing "should work"
    (is (= true true))))

(deftest get-code-function
  (testing "accepts a size for the returned code"
    (let [code (get-code :size 6)]
      (is (= 6 (count code)))))

  (testing "accepts a string with valid code chars"
    (let [code (get-code :chars "1111")]
      (is (= '("1" "1" "1" "1") code))))
  
  (testing "returns a random seq of chars"
    (let [code (get-code)]
      (is (= 4 (count code)))
      (is (seq? code)))))

(deftest get-image-function
  (testing "accepts a chars seq"
    (let [code [\a \b \c \d]]
      (is (get-image code))))
  
  (testing "returns image from a chars seq"
    (is true)))

(deftest call-convert-with-exec
  (testing "trying to exec a simple cmd command"
    (let [ch (exec "ls -al /tmp")]
      (print "so far so good")
      (go
       (<! ch)
       (print "end of go block")))))

