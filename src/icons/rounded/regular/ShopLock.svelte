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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 11a1 1 0 0 1-1 1 3.989 3.989 0 0 1-3-1.357A3.989 3.989 0 0 1 5 12H4c-.345 0-.68-.044-1-.126V16h6a1 1 0 1 1 0 2H3v2c0 1.103.897 2 2 2h4a1 1 0 1 1 0 2H5c-2.206 0-4-1.794-4-4v-9.357A3.984 3.984 0 0 1 0 8c0-.093 1.209-4.373 1.209-4.373A5.023 5.023 0 0 1 6.018 0h11.965a5.024 5.024 0 0 1 4.809 3.626l1.171 4.1a1 1 0 0 1-1.924.548l-1.171-4.099a3.014 3.014 0 0 0-2.885-2.176h-.982v2a1 1 0 1 1-2 0V2h-6v2a1 1 0 1 1-2 0V2h-.982a3.014 3.014 0 0 0-2.885 2.177L2.005 8.126c.032.517.65 1.874 1.996 1.874h1c1.103 0 2-.897 2-2a1 1 0 1 1 2 0c0 1.103.897 2 2 2a1 1 0 0 1 1 1Zm6 6.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 18 17.5Zm6 .5v2c0 2.206-1.794 4-4 4h-4c-2.206 0-4-1.794-4-4v-2a4 4 0 0 1 2-3.463V13c0-2.206 1.794-4 4-4s4 1.794 4 4v1.537c1.195.693 2 1.985 2 3.463Zm-8-4h4v-1c0-1.103-.897-2-2-2s-2 .897-2 2v1Zm6 4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-2Z"/></svg>
  