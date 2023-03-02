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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.551 12a12.556 12.556 0 0 0 4.406-7.449 3.943 3.943 0 0 0-.918-3.151A4.017 4.017 0 0 0 17 0H7.005a4.014 4.014 0 0 0-3.044 1.4 3.94 3.94 0 0 0-.917 3.158A12.522 12.522 0 0 0 7.445 12a12.522 12.522 0 0 0-4.4 7.444 3.94 3.94 0 0 0 .916 3.156A4.014 4.014 0 0 0 7.005 24H17a4.017 4.017 0 0 0 3.044-1.4 3.944 3.944 0 0 0 .918-3.156A12.557 12.557 0 0 0 16.551 12zm1.277 8.559A1 1 0 0 1 17 21H7a1 1 0 0 1-.928-1.374 14.856 14.856 0 0 1 4.6-5.656l.7-.559a1 1 0 0 1 1.245 0l.69.551a15.013 15.013 0 0 1 4.61 5.662 1 1 0 0 1-.089.935zM15.349 19h-6.7a14.962 14.962 0 0 1 3.271-3.462l.08-.066.071.055A15.3 15.3 0 0 1 15.349 19z"/></svg>
  