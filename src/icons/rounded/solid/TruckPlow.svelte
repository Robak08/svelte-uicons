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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.687 22.739a1 1 0 0 1-1.414-.064A8.666 8.666 0 0 1 20 16.818V16h-2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a3.855 3.855 0 0 1 4-4h10a4.006 4.006 0 0 1 3.873 3H20v-.818a8.663 8.663 0 0 1 2.272-5.856 1 1 0 1 1 1.477 1.348A6.67 6.67 0 0 0 22 13.182v3.636a6.666 6.666 0 0 0 1.75 4.508 1 1 0 0 1-.063 1.413ZM14.869 9.063l-3.432-4.922A5 5 0 0 0 7.336 2H6.5A2.5 2.5 0 0 0 4 4.5V9h10a6.077 6.077 0 0 1 .869.063ZM2.058 20c-.587 3.954 5.472 3.952 4.884 0Zm9 0c-.587 3.954 5.472 3.952 4.884 0Z"/></svg>
  