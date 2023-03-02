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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 15C5.271 15 0 12.145 0 8.5S5.271 2 12 2s12 2.855 12 6.5S18.729 15 12 15Zm4 6.636a17.04 17.04 0 0 0 3-.831v-4.88a19.7 19.7 0 0 1-3 .739v4.971Zm-11-.831c.91.349 1.917.629 3 .831v-4.971a19.7 19.7 0 0 1-3-.739v4.88Zm9-3.887c-.651.052-1.317.082-2 .082s-1.349-.03-2-.082v4.988c.651.057 1.315.094 2 .094s1.349-.037 2-.094v-4.988Zm7-1.836v4.75c1.869-1.143 3-2.651 3-4.332v-2.513c-.794.806-1.818 1.505-3 2.096Zm-18 0c-1.182-.591-2.206-1.29-3-2.096v2.513c0 1.681 1.131 3.19 3 4.332v-4.75Z"/></svg>
  