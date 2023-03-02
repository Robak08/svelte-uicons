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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.666 22.728a1 1 0 0 1-1.413-.08A8.884 8.884 0 0 1 20 16.72V14h-2.686A5.967 5.967 0 0 0 14 13H4a5.973 5.973 0 0 0-2.992.8V10A3.958 3.958 0 0 1 4 6.143V9a1 1 0 0 0 1 1h10a2 2 0 0 1 1.955 1.583 3.033 3.033 0 0 1 .035.407V12H20V8a1 1 0 0 1 2 0v8.72a6.89 6.89 0 0 0 1.745 4.6 1 1 0 0 1-.079 1.408ZM18 19a4.005 4.005 0 0 1-4 4H4c-5.276-.139-5.272-7.862 0-8h10a4 4 0 0 1 4 4ZM6 19a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm4 0a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm4 0a1 1 0 0 0-2 0 1 1 0 0 0 2 0ZM12.12 3.357A4 4 0 0 0 8.468.99h.025A2.5 2.5 0 0 0 6 3.493V8h8.2Z"/></svg>
  