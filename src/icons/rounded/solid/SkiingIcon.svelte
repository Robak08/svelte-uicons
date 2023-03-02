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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 2.5A2.5 2.5 0 1 1 18.5 5 2.5 2.5 0 0 1 16 2.5Zm7.513 17.9a1 1 0 0 0-1.334.469 2.089 2.089 0 0 1-2.767.94l-6.386-3.112 1.352-3.244a2.016 2.016 0 0 0-.588-2.561l-.872-.6 1.547-1.507L9.82 8.6a2.776 2.776 0 0 0 .062 3.961 655.98 655.98 0 0 0 2.739 1.934l-1.4 3.326L1.436 13.1a1 1 0 0 0-.872 1.8l18 8.716a4.313 4.313 0 0 0 1.771.384 4.012 4.012 0 0 0 3.647-2.271 1 1 0 0 0-.469-1.329ZM16 9.281V9.7a3.011 3.011 0 0 0 1.737 2.722l2.714 1.258a1 1 0 1 0 .841-1.814L18.579 10.6A1.006 1.006 0 0 1 18 9.7V8.47a3.4 3.4 0 0 0-1.339-2.721A2.926 2.926 0 0 0 14.812 5a3.022 3.022 0 0 0-2.256.916L11.341 7.1 16 9.285ZM11.341 7.1 5.967 4.583l.366-.771a1 1 0 1 0-1.807-.858l-.369.779-.7-.33A1 1 0 1 0 2.6 5.212l.7.328-.384.81a1 1 0 1 0 1.806.858l.388-.818L9.82 8.6c.03-.036 1.521-1.5 1.521-1.5Z"/></svg>
  