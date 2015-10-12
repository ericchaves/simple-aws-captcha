(ns simple-aws-captcha.test-runner
  (:require [cljs.test :as test]
            [doo.runner :refer-macros [doo-tests]]
            [simple-aws-captcha.core-test]))

(doo-tests 'simple-aws-captcha.core-test)

(defn -main
  "entrypoint"
   [] true)
(set! *main-cli-fn* -main)
