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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 13h-7.5a3.5 3.5 0 1 1 0-7H22a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2ZM9.023 9A5.508 5.508 0 0 1 14.5 4h4.971C17.022 1.027 13.319-.427 9.452.106 4.786.748 1.026 4.415.181 9h8.842Zm5.477 6a5.511 5.511 0 0 1-5.292-4H0a10.965 10.965 0 0 0 2.26 6.674c.477.624.74 1.461.74 2.355V21c0 1.654 1.346 3 3 3h7c1.654 0 3-1.346 3-3h.494a5.015 5.015 0 0 0 4.957-4.345L21.67 15h-7.169Z"/></svg>
  