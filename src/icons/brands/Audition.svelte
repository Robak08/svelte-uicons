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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.703 8.152 9.027 12.446 6.378 12.446z"/><path d="M19.752.429H4.248A4.248 4.248 0 0 0 0 4.677v14.645a4.248 4.248 0 0 0 4.248 4.249h15.503a4.248 4.248 0 0 0 4.248-4.249V4.677A4.247 4.247 0 0 0 19.752.429zm-7.253 16.277h-2.061a.146.146 0 0 1-.158-.111l-.809-2.46H5.807l-.745 2.428a.187.187 0 0 1-.19.143H3.017c-.106 0-.143-.058-.111-.174l3.172-9.015c.031-.095.063-.203.095-.325.041-.212.062-.427.063-.642a.098.098 0 0 1 .111-.111h2.521c.074 0 .116.027.127.079l3.6 10.03c.031.105-.001.158-.096.158zm7.564-.012-1.633.021a.187.187 0 0 1-.19-.111 2.3 2.3 0 0 1-.055-.246 1.454 1.454 0 0 1-.024-.246 2.79 2.79 0 0 1-1.048.665 4.258 4.258 0 0 1-1.094.151c-.382 0-.762-.06-1.125-.179a2.003 2.003 0 0 1-.848-.482 3.003 3.003 0 0 1-.555-1.051 4.362 4.362 0 0 1-.198-1.403V9.135a.113.113 0 0 1 .095-.127.17.17 0 0 1 .032 0h1.865a.113.113 0 0 1 .126.127v4.424c-.021.363.08.723.286 1.023.259.297.637.465 1.031.458.255-.025.504-.094.736-.204a2.09 2.09 0 0 0 .555-.325V9.12c0-.074.048-.111.143-.111l1.862.005a.098.098 0 0 1 .111.11l-.039 5.81c0 .264.003.499.008.706.006.206.016.386.032.539l.04.388c.009.085-.028.127-.113.127z"/></svg>
  