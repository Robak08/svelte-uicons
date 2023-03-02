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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm-2 10a5.006 5.006 0 0 1-4 4.895V18h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-3.125c-2.333-.488-4-2.662-4-5.098V6a2 2 0 0 1 2-2h1.783S9.094 6.838 9.07 6.917c-.147.487-.055 1.021.249 1.43S10.107 9 10.616 9h2.068l-1.533 2.473a1 1 0 0 0 1.7 1.054l1.881-3.037c.327-.493.357-1.123.077-1.645s-.821-.846-1.413-.846h-2.079l1.798-3H15a2 2 0 0 1 2 2v4Z"/></svg>
  