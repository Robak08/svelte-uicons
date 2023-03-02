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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 19h5v5H3a3 3 0 0 1-3-3v-2ZM5 5V0H3a3 3 0 0 0-3 3v2h5Zm7 0V3a3 3 0 0 0-3-3H7v5h5ZM0 7v10h5V7H0Zm7 0v10h5V7H7Zm0 17h2a3 3 0 0 0 3-3v-2H7v5Zm6.424-16.522 3.639 10.944 5.412-1.795-3.639-10.944-5.412 1.795Zm4.27 12.841.792 2.312a2 2 0 0 0 2.528 1.267l1.615-.535a2 2 0 0 0 1.268-2.529l-.791-2.309-5.412 1.795ZM12.793 5.58l5.412-1.795-.803-2.415A2 2 0 0 0 14.874.102l-1.615.535a2 2 0 0 0-1.268 2.528l.803 2.415Z"/></svg>
  