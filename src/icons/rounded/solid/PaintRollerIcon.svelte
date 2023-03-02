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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 3c0-1.654-1.346-3-3-3H3C1.346 0 0 1.346 0 3v2c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3 1.103 0 2 .897 2 2v1c0 1.103-.897 2-2 2h-7c-2.206 0-4 1.794-4 4v.184A2.996 2.996 0 0 0 7 17v4c0 1.654 1.346 3 3 3s3-1.346 3-3v-4a2.996 2.996 0 0 0-2-2.816V14c0-1.103.897-2 2-2h7c2.206 0 4-1.794 4-4V7c0-2.206-1.794-4-4-4Z"/></svg>
  