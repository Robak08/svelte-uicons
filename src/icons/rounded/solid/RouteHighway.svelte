<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.664 7.406a3.413 3.413 0 0 1-.54-2.952c.457-1.668 2.31-2.417 3.84-2.417.434 0 1.072-.012 1.604-.022l.414-.008c.601-.011 1.06-.413 1.591-.879.252-.221.496-.431.743-.601a2.952 2.952 0 0 1 3.365-.002c.247.169.491.379.744.6.531.465.991.866 1.592.876.23-.014.46.004.717.009.329.006.713.014 1.289.014 1.967 0 3.442.926 3.852 2.417a3.44 3.44 0 0 1-.543 2.974s-.343.46-.437.59L3.107 8.002c-.099-.136-.443-.595-.443-.595ZM20 10.004l-16-.003c0 .764-.435 1.632-.895 2.552C2.562 13.64 2 14.764 2 16c0 4.843 5.116 6.605 7.864 7.552.287.099.553.19.791.278.432.158 1.139.17 1.345.17.146 0 .9-.008 1.356-.174.233-.085.494-.175.774-.271 2.75-.947 7.869-2.709 7.869-7.554 0-1.236-.563-2.36-1.105-3.447-.459-.918-.893-1.786-.894-2.549Z"/></svg>
  