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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 11a1 1 0 0 1-.707-1.707l2.966-2.966a5.894 5.894 0 0 0-7.7.232 4.933 4.933 0 0 0-.445.508 2.283 2.283 0 0 1-1.554.959 7.055 7.055 0 0 0-4.5 2.038c-2.956 2.957-2.7 8.025.575 11.3A8.8 8.8 0 0 0 8.814 24a7.164 7.164 0 0 0 5.122-2.059 7.055 7.055 0 0 0 2.038-4.5 2.283 2.283 0 0 1 .959-1.554 4.933 4.933 0 0 0 .508-.445 5.9 5.9 0 0 0 .232-7.7l-2.966 2.966A1 1 0 0 1 14 11Zm-6.293 8.707a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414ZM10 17a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm1-3a1 1 0 1 1-1-1 1 1 0 0 1 1 1ZM23.482 3.018l-.214.214a6.035 6.035 0 0 1-2.62 1.534l-2.975 2.975a6.737 6.737 0 0 0-.642-.772 6.737 6.737 0 0 0-.772-.642l2.975-2.975a6.035 6.035 0 0 1 1.534-2.62l.214-.214a1.768 1.768 0 0 1 2.5 2.5Z"/></svg>
  