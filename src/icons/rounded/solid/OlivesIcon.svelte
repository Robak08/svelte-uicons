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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.038 7.1C18.33 3.452 20.407 3 22 3a1 1 0 0 0 1-1c-.192-1.845-3.136-.733-4.025-.324A21.274 21.274 0 0 0 10.75 0C7.972-.045-.356 1.249 2.624 3.386c2.723 1.561 10.438 2.184 14.089.773a8.606 8.606 0 0 0-.679 2.923C7.589 8.427 8.2 23.938 17 24c8.771-.059 9.416-15.477 1.038-16.9ZM16 21c-1.738 0-3-1.683-3-4a1 1 0 0 1 2 0c0 1.1.449 2 1 2a1 1 0 0 1 0 2ZM11.787 6.839C6.19 3.374-1.284 10.9.163 17.029A6.428 6.428 0 0 0 9.4 21.266C6.861 16.985 7.917 9.629 11.787 6.839Zm-6.027 7.23c-.717.839-.959 1.813-.54 2.171a1 1 0 0 1-1.3 1.52c-1.32-1.13-1.185-3.229.321-4.989a1 1 0 0 1 1.519 1.298Z"/></svg>
  