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
    
      
      
    
      var element = document.getElementById("95db6af7-45bc-43a2-9aa6-3703218b95c2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '95db6af7-45bc-43a2-9aa6-3703218b95c2' but no matching script tag was found.")
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
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
                    
                  var docs_json = '{"5b1ae093-a3c4-47c8-8a23-d630bfadb1e2":{"roots":{"references":[{"attributes":{"children":[[{"id":"14930"},0,0],[{"id":"14856"},1,0],[{"id":"14900"},1,1]]},"id":"15001","type":"GridBox"},{"attributes":{"axis_label":"m\\u00b2 Price [\\u20ac/m\\u00b2/Month]","formatter":{"id":"14970"},"ticker":{"id":"14870"}},"id":"14869","type":"LinearAxis"},{"attributes":{"axis":{"id":"14869"},"dimension":1,"ticker":null},"id":"14872","type":"Grid"},{"attributes":{},"id":"14870","type":"BasicTicker"},{"attributes":{"overlay":{"id":"14879"}},"id":"14875","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14873"},{"id":"14874"},{"id":"14875"},{"id":"14876"},{"id":"14877"},{"id":"14878"},{"id":"14893"}]},"id":"14880","type":"Toolbar"},{"attributes":{},"id":"14876","type":"SaveTool"},{"attributes":{"text":""},"id":"14992","type":"Title"},{"attributes":{},"id":"14877","type":"ResetTool"},{"attributes":{},"id":"14873","type":"PanTool"},{"attributes":{},"id":"14878","type":"HelpTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"14889","type":"VBar"},{"attributes":{},"id":"14874","type":"WheelZoomTool"},{"attributes":{},"id":"14994","type":"BasicTickFormatter"},{"attributes":{},"id":"14997","type":"BasicTickFormatter"},{"attributes":{},"id":"14866","type":"BasicTicker"},{"attributes":{},"id":"14998","type":"Selection"},{"attributes":{"source":{"id":"14855"}},"id":"14969","type":"CDSView"},{"attributes":{},"id":"14999","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"14855"},"glyph":{"id":"14966"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14967"},"selection_glyph":null,"view":{"id":"14969"}},"id":"14968","type":"GlyphRenderer"},{"attributes":{},"id":"14863","type":"LinearScale"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"14967","type":"Quad"},{"attributes":{"data":{"bottom":{"__ndarray__":"Q3kN5TUULkD61fVZAm8sQJxFewo8hy1Ax/4zXlyqLUA6l+niE4IrQOTR/MHGIytAs6O5CnnnKkC0lj4bSwosQDqkJhhvZStAAAAAAAAALkAPkc3yug4uQKgWVnpqYS1AE9pLaC+hKUAYCtP2hUIpQDIyMjIyEitAfwimfgjmKEDKMKHpUmArQGaQl+IB7SdA+n/vZyXoJkDPYjqL6SwoQH3qxXzqxSZAUMcNBp08J0AsvMIrvMInQOCMWMspWShA7IH1ZtDbJ0DGvcC/ajwnQLZRvnA6uSlAwKthjNX8JED9qsEuUbEmQHYlOSr6BidAdIcurXwOKUAGxKbSkG8mQKbIZ91giiRABeJCzUkgKkAAAAAAAAAkQKrPtDX+bipAhaVH5LYVJ0AbL90kBkEnQFCLnOyFsyRAxc8o8TNKKEAEHhKR8RYlQJeFETzmxCVA8ERAZbZkKEDSSQ4snWQoQAgffPDBxyVAAAAAAAAAJkBmZmZmZuYlQGRkZGRkpCVAb29vb2/vJkAGK9Tkr0MlQOaeRlju6SVA","dtype":"float64","order":"little","shape":[51]},"hqs":{"__ndarray__":"zczMzMzMNEBqBUgkfFkzQPbGDCSBNTRAqBGWexphNUB4Hh05tPkxQE6S7X0juDJAo/p2PJTQMEAAAAAAAEgyQK/ruq7rujJACe4juI/gNEBba6211lozQFjuaYTlnjJAtbS0tLS0MEDeDNzNwN0vQEvUrkTtSjJAWlpaWlpaMEB8gX/VuNcxQGDQF/QFuTFANsF4K/scLkAAAAAAAEAxQEuAQrUEKDBAKOGNps6/MEBM+8scQeMwQEb+B/u28TJAVVVVVVVVMkA4lcDnIzcxQK5Fg+PZWjFAjuh6wUfZLUBqnuZpnsYrQAiCIAiCIDFAyvjtUk9GMUD7uwLYqBoqQB5w/kKq+ShAR/vRWiMiMEB7zRdB5vosQAAAAAAAgDFAwhT5rBvELUCq82sPuawsQJhTbanveixACCGEEEIILUCJhFOaF38oQGw76G8GFyxAq6qqqqqqLkDKmrKmrCkvQFEURVEUBS5AMzMzMzMzMEAM4DGAxwAtQEc+v76kuC1AvelNb3rTK0D8akykB6otQOaeRljuaSZA","dtype":"float64","order":"little","shape":[51]},"invshade":["#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#000000","#000000","#ffffff","#000000","#ffffff","#000000","#000000","#000000","#000000","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],"lqs":{"__ndarray__":"Q3kN5TUULkD61fVZAm8sQJxFewo8hy1Ax/4zXlyqLUA6l+niE4IrQOTR/MHGIytAs6O5CnnnKkC0lj4bSwosQDqkJhhvZStAAAAAAAAALkAPkc3yug4uQKgWVnpqYS1AE9pLaC+hKUAYCtP2hUIpQDIyMjIyEitAfwimfgjmKEDKMKHpUmArQGaQl+IB7SdA+n/vZyXoJkDPYjqL6SwoQH3qxXzqxSZAUMcNBp08J0AsvMIrvMInQOCMWMspWShA7IH1ZtDbJ0DGvcC/ajwnQLZRvnA6uSlAwKthjNX8JED9qsEuUbEmQHYlOSr6BidAdIcurXwOKUAGxKbSkG8mQKbIZ91giiRABeJCzUkgKkAAAAAAAAAkQKrPtDX+bipAhaVH5LYVJ0AbL90kBkEnQFCLnOyFsyRAxc8o8TNKKEAEHhKR8RYlQJeFETzmxCVA8ERAZbZkKEDSSQ4snWQoQAgffPDBxyVAAAAAAAAAJkBmZmZmZuYlQGRkZGRkpCVAb29vb2/vJkAGK9Tkr0MlQOaeRljuaSZA","dtype":"float64","order":"little","shape":[51]},"m50":{"__ndarray__":"frvUk/GbjECzYqCEN5qJQIv4BFLJ2YpAVgtBP67wi0Dks24wRX6IQALFtALz+YdAAAAAAABwh0DXZm3WZqWIQOM4juM4TohAuHzLt3wLjEBzTyMs99SKQAAAAAAAyIlA4uHh4eFJhkDaoMmXjfOGQFZVVVVVvYhAZyq5ZBm1hkAr1oAr1lCIQEQyD8k8HYdAlPdHsHonhEC42hia7qCHQCsrKysrP4ZAHcj3KzvEhUBhGIZhGAaGQOKOuCPu6IdABsJIO9YlhkD/ziCi0b+FQPIaymsor4dApgb2jqnxgkD7U+pP6a+DQLx+tlgZfoNA0axfV+YZhUCxkIUsZLOCQFZVVVVV54FAFhUIcqfvhkCfy8nWlh2CQEvOyyI+wYZAmFQ+jPvzgkBrD7msGAiEQAjI+amEcINAbl3eAUdqhEDEvIJsEkyBQNFFF110UYNAPc/zPM+ThUA5juM4jouFQAAAAAAAYINAGhLzdoaEhEDH7UyChNiDQBvKayivYYVAd1we3PtHg0DPusEU+WyDQCQs9zTCgoFA","dtype":"float64","order":"little","shape":[51]},"meds":{"__ndarray__":"6sn47VJPMkDPrz3ksmIwQBGfQCo5LzFABP24MrfhMUCfdYMp8lkvQO7xqTaTsC5AAAAAAAAALkDBCIzACIwvQMdxHMdxHC9ALt/yLd/yMUA1wnJPIywxQAAAAAAAgDBAiIeHh4eHLEBUCys9tWAtQKuqqqqqqi9AhED3V8QQLUB1yh91yh8vQGEXhF0Qli1AvuBRKSLMKUAUnewMoj4uQC2JGNvQeSxAOq4os3TcK0AMwzAMwzAsQKesKWvKmi5AeH3sImRZLED0CAHkztYrQA3lNZTXUC5AZIPUWpE/KEAYBdooFjMpQDiiwKRT8yhADIFRhG4CK0C6pPJh3O8nQKuqqqqq6iZAME4znLdbLUD/k+M7HTAnQJPzsohPIC1AAItFqYlCKEB1MqWf9qMpQB+uaH3x4ShAl3fAkaIhKkDwqV+f7iMmQLrooosuuihA6Hme53meK0A/6ZM+6ZMrQM3MzMzMzChA7gyJeTtDKkAy1PECEGcpQOU1lNdQXitAolc7Lg+uKEDWDabIZ90oQOaeRljuaSZA","dtype":"float64","order":"little","shape":[51]},"name":["Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere","Tampere"],"shade":{"__ndarray__":"bO5W8BBr0T/wEGuRGbDpPwAAAAAAAPA/ODGm+DbU6D87SF65PALZP/yLCv+iwt8/9l2afZdm3z+QvHJ5BLLTP7n+gwNVNtY/HMdxHMdx3D8ZU3wbajTcP99nW6KEQeM/nvGMZzzjyT8oBJO0a8+3P314p3Qzf+I/UGVjqS6u3z+yVBfXf3DgP26o0XC/idE/geycdZC80j9OjCm+DTW6P4TklcsjkL0/G0t1cf0H5z8EVTaW6uLqP/yLCv+iwt8/m7sVPMRa5D/RE4JJ2rXnP28FD7EWmeE/ymkVHQXw0T/2HxyosrHEPxzHcRzHcbw/L82+S7Pvwj8cifNG4ryxP3CBC1zgAqc/hOSVyyOQvT9hsTVYbA2mP3TWQfLK5aE/QhGKUIQipD901kHyyuWhP0o38ycjUp8/bSzVxfUfnD8sl0cgO2eNPxFM0q49X5Y//ibGFN+Gqj+HGg33mxjDP8DmbgUPsaY/IByosrFUxz/Ax6+anFbBP5cJomWCaLk/K1nJSlaysj8sl0cgO2eNPwAAAAAAAAAA","dtype":"float64","order":"little","shape":[51]},"size":[437,1287,1603,1244,627,796,787,494,557,713,707,965,325,150,927,794,824,440,470,165,186,1154,1347,796,1020,1188,882,450,260,179,238,112,73,186,70,57,64,57,50,45,24,36,84,240,72,293,218,160,118,24,1],"top":{"__ndarray__":"zczMzMzMNEBqBUgkfFkzQPbGDCSBNTRAqBGWexphNUB4Hh05tPkxQE6S7X0juDJAo/p2PJTQMEAAAAAAAEgyQK/ruq7rujJACe4juI/gNEBba6211lozQFjuaYTlnjJAtbS0tLS0MEDeDNzNwN0vQEvUrkTtSjJAWlpaWlpaMEB8gX/VuNcxQGDQF/QFuTFANsF4K/scLkAAAAAAAEAxQEuAQrUEKDBAKOGNps6/MEBM+8scQeMwQEb+B/u28TJAVVVVVVVVMkA4lcDnIzcxQK5Fg+PZWjFAjuh6wUfZLUBqnuZpnsYrQAiCIAiCIDFAyvjtUk9GMUD7uwLYqBoqQB5w/kKq+ShAR/vRWiMiMEB7zRdB5vosQAAAAAAAgDFAwhT5rBvELUCq82sPuawsQJhTbanveixACCGEEEIILUCJhFOaF38oQGw76G8GFyxAq6qqqqqqLkDKmrKmrCkvQFEURVEUBS5AMzMzMzMzMEAM4DGAxwAtQEc+v76kuC1AvelNb3rTK0D8akykB6otQOaeRlju6SZA","dtype":"float64","order":"little","shape":[51]},"width":[0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424,0.29173661816847424],"x":{"__ndarray__":"vgsjDtO2jT+pySFNH/nTP3o96QBEguM/H5ZBW/gH7T9i98xa1kbzP7Uj+YewCfg/B1AltYrM/D8uvihxsscAQFfUvocfKQNAgOpUnoyKBUCqAOu0+esHQNMWgctmTQpA/CwX4tOuDEAmQ634QBAPQKisoQfXuBBAvLfsko3pEUDRwjceRBoTQObNgqn6ShRA+tjNNLF7FUAP5BjAZ6wWQCTvY0se3RdAOPqu1tQNGUBNBfphiz4aQGIQRe1BbxtAdhuQePifHECLJtsDr9AdQKAxJo9lAR9AWp44DQ4ZIEDlI95SabEgQG+pg5jESSFA+S4p3h/iIUCEtM4je3oiQA46dGnWEiNAmL8ZrzGrI0AjRb/0jEMkQK3KZDro2yRAN1AKgEN0JUDC1a/FngwmQExbVQv6pCZA1uD6UFU9J0BhZqCWsNUnQOvrRdwLbihAdXHrIWcGKUAA95Bnwp4pQIp8Nq0dNypAFALc8njPKkCfh4E41GcrQCkNJ34vACxAs5LMw4qYLEA+GHIJ5jAtQMidF09ByS1A","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"14988"},"selection_policy":{"id":"14989"}},"id":"14853","type":"ColumnDataSource"},{"attributes":{"data":{"bottom":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"left":[0.014508866185115706,0.31208021671695946,0.6096515672488032,0.9072229177806469,1.2047942683124906,1.5023656188443344,1.799936969376178,2.0975083199080222,2.395079670439866,2.6926510209717094,2.9902223715035534,3.287793722035397,3.5853650725672406,3.8829364230990846,4.180507773630929,4.478079124162772,4.775650474694616,5.07322182522646,5.370793175758303,5.668364526290147,5.965935876821991,6.263507227353834,6.561078577885678,6.858649928417522,7.156221278949365,7.453792629481209,7.751363980013053,8.048935330544897,8.346506681076741,8.644078031608585,8.941649382140428,9.239220732672273,9.536792083204116,9.834363433735959,10.131934784267804,10.429506134799647,10.72707748533149,11.024648835863335,11.322220186395178,11.619791536927021,11.917362887458866,12.21493423799071,12.512505588522552,12.810076939054397,13.10764828958624,13.405219640118084,13.702790990649929,14.000362341181772,14.297933691713615,14.59550504224546],"right":[0.31208021671695946,0.6096515672488032,0.9072229177806469,1.2047942683124906,1.5023656188443344,1.799936969376178,2.0975083199080222,2.395079670439866,2.6926510209717094,2.9902223715035534,3.287793722035397,3.5853650725672406,3.8829364230990846,4.180507773630929,4.478079124162772,4.775650474694616,5.07322182522646,5.370793175758303,5.668364526290147,5.965935876821991,6.263507227353834,6.561078577885678,6.858649928417522,7.156221278949365,7.453792629481209,7.751363980013053,8.048935330544897,8.346506681076741,8.644078031608585,8.941649382140428,9.239220732672273,9.536792083204116,9.834363433735959,10.131934784267804,10.429506134799647,10.72707748533149,11.024648835863335,11.322220186395178,11.619791536927021,11.917362887458866,12.21493423799071,12.512505588522552,12.810076939054397,13.10764828958624,13.405219640118084,13.702790990649929,14.000362341181772,14.297933691713615,14.59550504224546,14.893076392777303],"top":[437,1287,1603,1244,627,796,787,494,557,713,707,965,325,150,927,794,824,440,470,165,186,1154,1347,796,1020,1188,882,450,260,179,238,112,73,186,70,57,64,57,50,45,24,36,84,240,72,293,218,160,118,25]},"selected":{"id":"14979"},"selection_policy":{"id":"14980"}},"id":"14854","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"field":"shade"},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.7},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"14888","type":"VBar"},{"attributes":{"axis":{"id":"14865"},"ticker":null},"id":"14868","type":"Grid"},{"attributes":{"data":{"bottom":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAlQAAAAAAAACZAAAAAAAAAJ0AAAAAAAAAoQAAAAAAAAClAAAAAAAAAKkAAAAAAAAArQAAAAAAAACxAAAAAAAAALUAAAAAAAAAuQAAAAAAAAC9AAAAAAAAAMEAAAAAAAIAwQAAAAAAAADFAAAAAAACAMUAAAAAAAAAyQAAAAAAAgDJAAAAAAAAAM0AAAAAAAIAzQAAAAAAAADRAAAAAAACANEAAAAAAAAA1QAAAAAAAgDVAAAAAAAAANkAAAAAAAIA2QAAAAAAAADdAAAAAAACAN0AAAAAAAAA4QAAAAAAAgDhA","dtype":"float64","order":"little","shape":[30]},"left":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"right":[633,819,976,1049,1096,1135,1314,1235,1344,1206,1290,1094,1131,1013,928,943,796,771,601,489,597,448,437,335,280,290,240,188,195,139],"top":{"__ndarray__":"AAAAAAAAJUAAAAAAAAAmQAAAAAAAACdAAAAAAAAAKEAAAAAAAAApQAAAAAAAACpAAAAAAAAAK0AAAAAAAAAsQAAAAAAAAC1AAAAAAAAALkAAAAAAAAAvQAAAAAAAADBAAAAAAACAMEAAAAAAAAAxQAAAAAAAgDFAAAAAAAAAMkAAAAAAAIAyQAAAAAAAADNAAAAAAACAM0AAAAAAAAA0QAAAAAAAgDRAAAAAAAAANUAAAAAAAIA1QAAAAAAAADZAAAAAAACANkAAAAAAAAA3QAAAAAAAgDdAAAAAAAAAOEAAAAAAAIA4QAAAAAAAADlA","dtype":"float64","order":"little","shape":[30]}},"selected":{"id":"14998"},"selection_policy":{"id":"14999"}},"id":"14855","type":"ColumnDataSource"},{"attributes":{},"id":"14861","type":"LinearScale"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.9},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"14966","type":"Quad"},{"attributes":{},"id":"14859","type":"DataRange1d"},{"attributes":{"background_fill_color":"#eeeeee","below":[{"id":"14865"}],"center":[{"id":"14868"},{"id":"14872"}],"left":[{"id":"14869"}],"min_border_top":0,"plot_height":500,"renderers":[{"id":"14891"},{"id":"14898"}],"title":{"id":"14983"},"toolbar":{"id":"14880"},"toolbar_location":null,"x_range":{"id":"14857"},"x_scale":{"id":"14861"},"y_range":{"id":"14859"},"y_scale":{"id":"14863"}},"id":"14856","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14977","type":"BasicTickFormatter"},{"attributes":{},"id":"14857","type":"DataRange1d"},{"attributes":{"axis_label":"Distance from center [km]","formatter":{"id":"14985"},"ticker":{"id":"14866"}},"id":"14865","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14922","type":"BoxAnnotation"},{"attributes":{},"id":"14979","type":"Selection"},{"attributes":{"text":""},"id":"14973","type":"Title"},{"attributes":{},"id":"14975","type":"BasicTickFormatter"},{"attributes":{},"id":"14980","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14879","type":"BoxAnnotation"},{"attributes":{},"id":"14932","type":"DataRange1d"},{"attributes":{},"id":"14936","type":"LinearScale"},{"attributes":{},"id":"14934","type":"LinearScale"},{"attributes":{},"id":"14951","type":"HelpTool"},{"attributes":{"formatter":{"id":"14977"},"ticker":{"id":"14943"},"visible":false},"id":"14942","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"14962","type":"Quad"},{"attributes":{},"id":"14920","type":"ResetTool"},{"attributes":{"formatter":{"id":"14975"},"ticker":{"id":"14939"},"visible":false},"id":"14938","type":"LinearAxis"},{"attributes":{},"id":"14939","type":"BasicTicker"},{"attributes":{"axis":{"id":"14938"},"ticker":null,"visible":false},"id":"14941","type":"Grid"},{"attributes":{"data_source":{"id":"14853"},"glyph":{"id":"14888"},"hover_glyph":{"id":"14890"},"muted_glyph":null,"nonselection_glyph":{"id":"14889"},"selection_glyph":null,"view":{"id":"14892"}},"id":"14891","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"14942"},"dimension":1,"ticker":null,"visible":false},"id":"14945","type":"Grid"},{"attributes":{"text":""},"id":"14983","type":"Title"},{"attributes":{},"id":"14943","type":"BasicTicker"},{"attributes":{"use_scientific":false},"id":"14970","type":"BasicTickFormatter"},{"attributes":{},"id":"14947","type":"WheelZoomTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0},"fill_color":{"value":"white"},"left":{"field":"left"},"line_alpha":{"value":0.9},"line_color":{"value":"#005500"},"right":{"field":"right"},"top":{"field":"top"}},"id":"14961","type":"Quad"},{"attributes":{},"id":"14946","type":"PanTool"},{"attributes":{"overlay":{"id":"14952"}},"id":"14948","type":"BoxZoomTool"},{"attributes":{},"id":"14949","type":"SaveTool"},{"attributes":{},"id":"14950","type":"ResetTool"},{"attributes":{"data_source":{"id":"14854"},"glyph":{"id":"14961"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14962"},"selection_glyph":null,"view":{"id":"14964"}},"id":"14963","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":[{"id":"14891"}],"tooltips":[["City","@name"],["Distance","@x{0.00} km"],["50 m\\u00b2 Apt","@m50{0.00} \\u20ac"],["q.75","@hqs{0.00} \\u20ac/m\\u00b2/month"],["med","@meds{0.00} \\u20ac/m\\u00b2/month"],["q.25","@lqs{0.00)} \\u20ac/m\\u00b2/month"]]},"id":"14893","type":"HoverTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.9},"fill_color":{"value":"#005500"},"line_alpha":{"value":0.7},"line_color":{"value":"#005500"},"top":{"field":"top"},"width":{"field":"width"},"x":{"field":"x"}},"id":"14890","type":"VBar"},{"attributes":{"source":{"id":"14853"}},"id":"14892","type":"CDSView"},{"attributes":{},"id":"14985","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"14853"},"glyph":{"id":"14896"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14897"},"selection_glyph":null,"view":{"id":"14899"}},"id":"14898","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"14908"}],"center":[{"id":"14911"},{"id":"14915"}],"min_border_left":0,"outline_line_color":null,"plot_height":500,"plot_width":100,"renderers":[{"id":"14968"}],"title":{"id":"14992"},"toolbar":{"id":"14923"},"toolbar_location":null,"x_range":{"id":"14901"},"x_scale":{"id":"14904"},"y_range":{"id":"14859"},"y_scale":{"id":"14906"}},"id":"14900","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14952","type":"BoxAnnotation"},{"attributes":{"fill_color":{"field":"invshade"},"line_color":{"field":"invshade"},"x":{"field":"x"},"y":{"field":"meds"}},"id":"14896","type":"Scatter"},{"attributes":{"above":[{"id":"14938"}],"center":[{"id":"14941"},{"id":"14945"}],"left":[{"id":"14942"}],"min_border_bottom":0,"outline_line_color":null,"plot_height":100,"renderers":[{"id":"14963"}],"title":{"id":"14973"},"toolbar":{"id":"14953"},"toolbar_location":null,"x_range":{"id":"14857"},"x_scale":{"id":"14934"},"y_range":{"id":"14932"},"y_scale":{"id":"14936"}},"id":"14930","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"invshade"},"line_alpha":{"value":0.1},"line_color":{"field":"invshade"},"x":{"field":"x"},"y":{"field":"meds"}},"id":"14897","type":"Scatter"},{"attributes":{"axis":{"id":"14912"},"dimension":1,"ticker":null,"visible":false},"id":"14915","type":"Grid"},{"attributes":{},"id":"14906","type":"LinearScale"},{"attributes":{"formatter":{"id":"14997"},"ticker":{"id":"14913"}},"id":"14912","type":"LinearAxis"},{"attributes":{"axis":{"id":"14908"},"ticker":null,"visible":false},"id":"14911","type":"Grid"},{"attributes":{"source":{"id":"14853"}},"id":"14899","type":"CDSView"},{"attributes":{},"id":"14901","type":"DataRange1d"},{"attributes":{},"id":"14904","type":"LinearScale"},{"attributes":{},"id":"14909","type":"BasicTicker"},{"attributes":{"formatter":{"id":"14994"},"ticker":{"id":"14909"},"visible":false},"id":"14908","type":"LinearAxis"},{"attributes":{},"id":"14988","type":"Selection"},{"attributes":{},"id":"14917","type":"WheelZoomTool"},{"attributes":{},"id":"14989","type":"UnionRenderers"},{"attributes":{},"id":"14913","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14916"},{"id":"14917"},{"id":"14918"},{"id":"14919"},{"id":"14920"},{"id":"14921"}]},"id":"14923","type":"Toolbar"},{"attributes":{},"id":"14916","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14946"},{"id":"14947"},{"id":"14948"},{"id":"14949"},{"id":"14950"},{"id":"14951"}]},"id":"14953","type":"Toolbar"},{"attributes":{},"id":"14921","type":"HelpTool"},{"attributes":{"overlay":{"id":"14922"}},"id":"14918","type":"BoxZoomTool"},{"attributes":{},"id":"14919","type":"SaveTool"},{"attributes":{"source":{"id":"14854"}},"id":"14964","type":"CDSView"}],"root_ids":["15001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"5b1ae093-a3c4-47c8-8a23-d630bfadb1e2","root_ids":["15001"],"roots":{"15001":"95db6af7-45bc-43a2-9aa6-3703218b95c2"}}];
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