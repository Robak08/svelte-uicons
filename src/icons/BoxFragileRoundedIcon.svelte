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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-box-fragile {customClass}"><path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14ZM17 6v4a5.009 5.009 0 0 1-4 4.899V18h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-3.101c-2.338-.484-4-2.683-4-5.122V6a2 2 0 0 1 2-2h1.783S9.094 6.838 9.07 6.917c-.147.487-.055 1.021.249 1.43S10.107 9 10.616 9h2.068l-1.533 2.473a1 1 0 0 0 1.7 1.054l1.881-3.037c.327-.493.357-1.123.077-1.645s-.821-.846-1.413-.846h-2.079l1.798-3H15a2 2 0 0 1 2 2Z"/></svg>
  