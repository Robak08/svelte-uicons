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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.9 21.729A4.014 4.014 0 0 1 20.253 24a4.324 4.324 0 0 1-1.768-.383L.483 14.9a1 1 0 0 1 .872-1.8l8.913 4.316 1.636-3.3-2-1.469a1.077 1.077 0 0 1-.106-.086A2.772 2.772 0 0 1 9.74 8.61L5.027 6.393l-.386.815a1 1 0 0 1-.9.571.988.988 0 0 1-.428-.1 1 1 0 0 1-.475-1.332l.384-.809-.7-.329A1 1 0 0 1 3.37 3.4l.705.332.37-.781a1 1 0 1 1 1.807.858l-.367.774 5.366 2.527 1.224-1.193A3.022 3.022 0 0 1 14.731 5a2.91 2.91 0 0 1 1.849.748 3.4 3.4 0 0 1 1.339 2.72V9.7a1 1 0 0 0 .579.908l2.714 1.258a1 1 0 0 1-.842 1.815l-2.714-1.259A3.01 3.01 0 0 1 15.919 9.7V8.47a1.448 1.448 0 0 0-.59-1.163A1.018 1.018 0 0 0 14.667 7a.986.986 0 0 0-.764.316l-.72.7.162.076a1 1 0 0 1-.852 1.81l-.839-.395-.4.386c-.121.131-.572.69-.121 1.17l1.959 1.4a2.014 2.014 0 0 1 .587 2.562l-1.614 3.258 7.263 3.517a2.1 2.1 0 0 0 2.767-.941 1 1 0 0 1 1.8.865ZM18.419 5a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5Z"/></svg>
  