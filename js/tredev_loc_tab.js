(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("abe25773-93c1-4e90-8f6f-06994f3a3ce2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'abe25773-93c1-4e90-8f6f-06994f3a3ce2' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js", "https://unpkg.com/@holoviz/panel@^0.10.2/dist/panel.min.js"];
      var css_urls = ["/static/extensions/panel/css/dataframe.css", "/static/extensions/panel/css/alerts.css", "/static/extensions/panel/css/json.css", "/static/extensions/panel/css/widgets.css", "/static/extensions/panel/css/card.css", "/static/extensions/panel/css/markdown.css"];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"a27e7320-25a0-4947-aa37-fa1f20f2982d":{"roots":{"references":[{"attributes":{"columns":[{"id":"14639"},{"id":"14641"},{"id":"14644"},{"id":"14647"},{"id":"14649"}],"height":470,"source":{"id":"14638"},"view":{"id":"14651"}},"id":"14650","type":"DataTable"},{"attributes":{"editor":{"id":"15245"},"field":"end","formatter":{"id":"14643"},"title":"\\u20ac/m\\u00b2, Dec 2020","width":220},"id":"14644","type":"TableColumn"},{"attributes":{"format":"0.00"},"id":"14643","type":"NumberFormatter"},{"attributes":{},"id":"15241","type":"UnionRenderers"},{"attributes":{"editor":{"id":"15248"},"field":"count","formatter":{"id":"15247"},"title":"Avg Ads in a day","width":150},"id":"14649","type":"TableColumn"},{"attributes":{},"id":"15248","type":"StringEditor"},{"attributes":{"editor":{"id":"15244"},"field":"start","formatter":{"id":"14640"},"title":"\\u20ac/m\\u00b2, Jan 2018","width":220},"id":"14641","type":"TableColumn"},{"attributes":{},"id":"15245","type":"StringEditor"},{"attributes":{},"id":"15240","type":"Selection"},{"attributes":{"source":{"id":"14638"}},"id":"14651","type":"CDSView"},{"attributes":{"format":"0.00"},"id":"14640","type":"NumberFormatter"},{"attributes":{},"id":"15246","type":"StringEditor"},{"attributes":{"editor":{"id":"15243"},"field":"district","formatter":{"id":"15242"},"title":"District","width":290},"id":"14639","type":"TableColumn"},{"attributes":{},"id":"15247","type":"StringFormatter"},{"attributes":{"editor":{"id":"15246"},"field":"proc","formatter":{"id":"14646"},"title":"Price growth","width":150},"id":"14647","type":"TableColumn"},{"attributes":{},"id":"15243","type":"StringEditor"},{"attributes":{"format":"0.0 %"},"id":"14646","type":"NumberFormatter"},{"attributes":{},"id":"15244","type":"StringEditor"},{"attributes":{},"id":"15242","type":"StringFormatter"},{"attributes":{"data":{"count":[27,21,112,56,23,29,51,11,34,11,15,25,16,52,23,14,23],"dinr":{"__ndarray__":"2Wr/0FgSRj8/8HioWH04P4+xH4hftkU/wDVLVNp5VT8l5RheBztEP1uA0Pyv6Vg/vC96KxORWT+22kWlIwtGPyno2qAKUlk/dSrIWZDzJD+11659M49LP2v1hFNM8FI/lJ5EKhtw4760ZdydU1I/P50uJeMb+1M/DFTM0QYsKT/LfRtsVZNOPw==","dtype":"float64","order":"little","shape":[17]},"district":["Atala-Linnainmaa","Epil\\u00e4","Hervanta","H\\u00e4rm\\u00e4l\\u00e4-Rantaperki\\u00f6","It\\u00e4-Amuri-Tammerkoski","Kaleva","Kaukaj\\u00e4rvi","Lent\\u00e4v\\u00e4nniemi","Luoteis-Tampere","L\\u00e4nsi-Amuri","Nekala","Osmonm\\u00e4ki-Petsamo","Takahuhti","Tampere Keskus","Tampere Keskus L\\u00e4ntinen","Tesoma","Vuores"],"end":{"__ndarray__":"H4XrUbgeLEC4HoXrUbgqQKRwPQrXIylAuB6F61G4L0AfhetRuN4wQIXrUbgehTBACtejcD0KK0AAAAAAAIAqQMP1KFyPAjBAUrgehetRMEDNzMzMzIwwQIXrUbgeBTBAj8L1KFwPK0DhehSuR+EwQOxRuB6FqzBAPQrXo3C9JkCkcD0K12MyQA==","dtype":"float64","order":"little","shape":[17]},"proc":{"__ndarray__":"2c73U+Olqz9YObTIdr6fP7gehetRuK4/SgwCK4cWuT/LoUW28/2kP9Ei2/l+arw/5/up8dJNwj8ZBFYOLbKtP8HKoUW2870/exSuR+F6hD8ZBFYOLbKtP8P1KFyPwrU/AAAAAAAAAABYObTIdr6fP2q8dJMYBLY/O99PjZdukj8ZBFYOLbKtPw==","dtype":"float64","order":"little","shape":[17]},"start":{"__ndarray__":"KVyPwvWoKkBmZmZmZuYpQDMzMzMzsydAXI/C9SjcLEAzMzMzMzMwQLgehetRuC1ApHA9CtejJ0AK16NwPQopQClcj8L1qCxAZmZmZmYmMEBI4XoUrkcvQIXrUbgehS1AFK5H4XoUK0Bcj8L1KFwwQK5H4XoUri5AUrgehetRJkAfhetRuF4xQA==","dtype":"float64","order":"little","shape":[17]}},"selected":{"id":"15240"},"selection_policy":{"id":"15241"}},"id":"14638","type":"ColumnDataSource"}],"root_ids":["14650"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"a27e7320-25a0-4947-aa37-fa1f20f2982d","root_ids":["14650"],"roots":{"14650":"abe25773-93c1-4e90-8f6f-06994f3a3ce2"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();