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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 8V7c0-2.757 2.243-5 5-5h1V1a1 1 0 1 1 2 0v1h8V1a1 1 0 1 1 2 0v1h1c2.757 0 5 2.243 5 5v1H0Zm24 2v9c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-9h24Zm-6.168 3.152a1 1 0 0 0-1.414-.026l-4.754 4.582c-.376.376-1.007.404-1.439-.026l-2.278-2.117a1 1 0 1 0-1.361 1.465l2.252 2.092c.566.567 1.32.879 2.121.879s1.556-.312 2.108-.866l4.74-4.568a1 1 0 0 0 .025-1.414Z"/></svg>
  