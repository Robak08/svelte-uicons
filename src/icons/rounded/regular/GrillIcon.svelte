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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.339 7.129A2.978 2.978 0 0 0 21 6H3c-6.654 1.04-.636 9.791 2.833 11.341l-1.78 5.343a1 1 0 1 0 1.9.632L7.654 18.2a12.329 12.329 0 0 0 3.346.757V23a1 1 0 0 0 2 0v-4.043a12.322 12.322 0 0 0 3.345-.758l1.706 5.117a1 1 0 1 0 1.9-.632l-1.781-5.345c2.839-1.489 7.452-6.939 5.169-10.21Zm-1.367 2.115C19.488 19.5 4.506 19.5 2.026 9.244A.993.993 0 0 1 3 8h18a.994.994 0 0 1 .972 1.244ZM11 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm4 0V1a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0ZM7 3V1a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0Z"/></svg>
  