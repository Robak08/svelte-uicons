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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.09 16H15c6.643 0 9-3.5 9-6.5a3.5 3.5 0 0 0-2.84-3.433 7.564 7.564 0 0 0 .409-1 3.887 3.887 0 0 0-.626-3.458A3.979 3.979 0 0 0 17.729 0H6.271a3.979 3.979 0 0 0-3.214 1.612 3.887 3.887 0 0 0-.626 3.458 7.564 7.564 0 0 0 .409 1A3.5 3.5 0 0 0 0 9.5c0 3 2.357 6.5 9 6.5h.91a5.027 5.027 0 0 1 .09.921V20a1.883 1.883 0 0 1-2 2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-1.994A1.885 1.885 0 0 1 14 20v-3.08a5.025 5.025 0 0 1 .09-.92zm1.636-2.851a23.486 23.486 0 0 0 4.4-5.225A1 1 0 0 0 20.5 8 1.5 1.5 0 0 1 22 9.5c0 2.176-1.839 4.5-7 4.5h-.056a4.805 4.805 0 0 1 .782-.851zM9 14c-5.161 0-7-2.324-7-4.5A1.5 1.5 0 0 1 3.5 8a1 1 0 0 0 .375-.076 23.486 23.486 0 0 0 4.4 5.225 4.805 4.805 0 0 1 .781.851z"/></svg>
  