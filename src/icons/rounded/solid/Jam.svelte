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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 12a8.257 8.257 0 0 0 1-.074V18a6.006 6.006 0 0 1-6 6H8a6.006 6.006 0 0 1-6-6v-6.077a6.07 6.07 0 0 0 4-.723 6.11 6.11 0 0 0 6 0 6.112 6.112 0 0 0 6 0 5.931 5.931 0 0 0 3 .8Zm-1-7V2.5A2.5 2.5 0 0 0 17.5 0h-11A2.587 2.587 0 0 0 4 3h11a1 1 0 0 1 0 2H4c-4.973.85-5.252 4.945-1 5a3.965 3.965 0 0 0 2.444-.833.952.952 0 0 1 1.108 0 4.058 4.058 0 0 0 4.893 0 .946.946 0 0 1 1.11 0 4.058 4.058 0 0 0 4.893 0 .952.952 0 0 1 1.108 0A3.965 3.965 0 0 0 21 10c4.252.017 3.972-4.141-1-5Z"/></svg>
  