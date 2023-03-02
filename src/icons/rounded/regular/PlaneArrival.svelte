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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.293 8.224a6.532 6.532 0 0 0 3.679 5.175l11.822 5.289c.402.192.831.289 1.262.289.346 0 .691-.062 1.026-.187a2.907 2.907 0 0 0 1.666-1.575 3.004 3.004 0 0 0-1.535-3.946l-2.321-1.07-1.514-8.22a3.001 3.001 0 0 0-1.8-2.485l-.794-.338a1.994 1.994 0 0 0-1.891.174A1.995 1.995 0 0 0 10.999 3v6.024L7.833 7.565 6.647 4.529a2.39 2.39 0 0 0-2.405-1.524 2.314 2.314 0 0 0-1.637.831 2.532 2.532 0 0 0-.58 1.893l.267 2.495ZM13 2.996l.788.336c.336.146.565.462.61.917l1.272 6.927-2.671-1.231V2.996ZM4.134 5.128a.32.32 0 0 1 .23-.126h.031a.41.41 0 0 1 .39.257l1.333 3.41c.095.241.278.436.513.544l12.77 5.884c.505.221.736.812.516 1.316a.926.926 0 0 1-.531.502.948.948 0 0 1-.752-.042L6.811 11.584a4.515 4.515 0 0 1-2.529-3.573l-.267-2.495a.526.526 0 0 1 .119-.389ZM24 23a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h22a1 1 0 0 1 1 1Z"/></svg>
  