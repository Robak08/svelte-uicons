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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5.005 23.992c-2.021-.1-3.872-2.077-4.74-3.761A3.049 3.049 0 0 1 3.413 16C.841 9.025 9.03.845 16 3.413A3.049 3.049 0 0 1 20.231.265a7.972 7.972 0 0 1 3.488 3.5A3.046 3.046 0 0 1 20.587 8C23.158 14.973 14.971 23.158 8 20.587a3.076 3.076 0 0 1-2.995 3.405Zm-2-6c-2.543.508.405 3.415 1.606 3.909A.985.985 0 0 0 6 20.979c.083-.988-.3-2.479.521-2.859a1 1 0 0 1 1.018.035C13.425 21.9 21.9 13.421 18.155 7.541A1.006 1.006 0 0 1 19 6h1.983a.984.984 0 0 0 .926-1.392C21.415 3.41 18.5.462 18 3.005c-.082 1 .3 2.5-.52 2.875a.992.992 0 0 1-1.018-.035C13.879 4.2 10.114 4.891 7.5 7.5s-3.3 6.381-1.655 8.958A1.007 1.007 0 0 1 5 18Zm11.638-2.51a1 1 0 0 0-1.288-1.528c-1.244 1.047-2.887 1.353-3.75.7a1 1 0 1 0-1.205 1.6c1.9 1.354 4.4.755 6.243-.767Z"/></svg>
  