(defproject simple-aws-captcha "0.1.0-SNAPSHOT"
  :description "Simple serverless captcha for AWS Lambda"
  :url "http://github.com/ericchaves/simple-aws-captcha"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [io.nervous/cljs-lambda "0.1.2"]]
  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-npm "0.5.0"]
            [io.nervous/lein-cljs-lambda "0.2.4"]]
  :node-dependencies [[source-map-support "0.2.8"]
                      [gm "1.9.0"]]
  :profiles
  { :dev { :plugins [[org.bodil/lein-noderepl "0.1.11"]] }}
  :source-paths ["src"]
  :cljs-lambda
  {:cljs-build-id "simple-aws-captcha"
   :aws-profile "default"
   :defaults {:role "arn:aws:iam::FIXME:role/cljs-lambda-default", :create true}
   :functions
   [{:name   "simple-captcha"
     :invoke simple-aws-captcha.core/get-captcha
     :description "create captcha and store it on memcached returning its image"}]}
  :cljsbuild
  {:builds [{:id "simple-aws-captcha"
             :source-paths ["src"]
             :compiler {:output-to "out/simple_aws_captcha.js"
                        :output-dir "out"
                        :target :nodejs
                        :optimizations :none
                        :source-map true}}]})
