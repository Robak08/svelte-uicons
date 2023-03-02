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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.707 22.293-3.732-3.732c4.081-4.304 4.022-11.12-.197-15.339A10.931 10.931 0 0 0 12 0C9.16 0 6.491 1.078 4.439 3.025L1.707.293A.999.999 0 1 0 .293 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM12 7c2.206 0 4 1.794 4 4 0 .981-.356 1.895-.976 2.61l-1.429-1.429c.251-.338.404-.743.404-1.182 0-1.103-.897-2-2-2-.432 0-.849.142-1.19.396L9.401 7.987A3.993 3.993 0 0 1 12 7Zm4.319 13.56a1.004 1.004 0 0 1-.029 1.443l-.505.466c-1.001.98-2.354 1.532-3.786 1.532s-2.784-.552-3.807-1.553L4.25 18.806A11.003 11.003 0 0 1 1.479 7.8a.998.998 0 0 1 1.664-.417L16.319 20.56Z"/></svg>
  