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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m19.95 5.536-3.485-3.485a6.954 6.954 0 0 0-4.95-2.05H7A5.004 5.004 0 0 0 2 5v14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5v-8.515c0-1.87-.728-3.627-2.05-4.95ZM18.536 6.95c.315.315.564.674.781 1.05H15c-.551 0-1-.449-1-1V2.683c.376.217.735.466 1.05.781l3.485 3.485ZM20 19c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h4.515c.165 0 .323.032.485.047V7c0 1.654 1.346 3 3 3h4.953c.016.162.047.32.047.485V19Zm-3.625-5.782L15 14.249v-1.25a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1.25l1.375 1.031A1.016 1.016 0 0 0 18 17.968V14.03c0-.837-.955-1.314-1.625-.812ZM13 18H8v-4h5v4Z"/></svg>
  