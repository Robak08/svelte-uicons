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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12 12 0 0 0 0 12c.59 15.905 23.416 15.89 24 0A12 12 0 0 0 12 0Zm0 2a10.01 10.01 0 0 1 8.878 5.4l-7.049 1.41a9.64 9.64 0 0 1-3.8 0L3.108 7.428A10.01 10.01 0 0 1 12 2ZM9 21.54a10.027 10.027 0 0 1-6.935-8.4l3.9.78a2.994 2.994 0 0 1 2.05 1.515l.624 1.153A3 3 0 0 1 9 18.014Zm6 0v-3.526a3 3 0 0 1 .362-1.428l.624-1.154a3 3 0 0 1 2.05-1.514l3.9-.78A10.027 10.027 0 0 1 15 21.54Zm2.644-9.583a4.987 4.987 0 0 0-3.416 2.522l-.628 1.154a5.009 5.009 0 0 0-.6 2.381v3.936a10.126 10.126 0 0 1-2 0v-3.936a5.009 5.009 0 0 0-.6-2.381l-.628-1.153a4.985 4.985 0 0 0-3.416-2.523l-4.314-.863a9.82 9.82 0 0 1 .324-1.775l7.272 1.454a11.629 11.629 0 0 0 4.583 0l7.406-1.481a9.845 9.845 0 0 1 .331 1.8Z"/></svg>
  