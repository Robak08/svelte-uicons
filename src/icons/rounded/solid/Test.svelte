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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 7a2 2 0 0 1-2-2V0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7zm-4.289 12.7L10.1 21.339a2.255 2.255 0 0 1-3.186 0l-.631-.639a1 1 0 0 1 1.434-1.394l.616.633a.249.249 0 0 0 .344-.009l1.612-1.63a1 1 0 1 1 1.422 1.4zM13 15v-1h-2v1a1 1 0 1 1-2 0v-4a3 3 0 0 1 6 0v4a1 1 0 1 1-2 0zm4 6h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2zm-4-10v1h-2v-1a1 1 0 0 1 2 0zm7.7-6H16V.3a4.968 4.968 0 0 1 1.879 1.164l1.656 1.658A4.954 4.954 0 0 1 20.7 5z"/></svg>
  