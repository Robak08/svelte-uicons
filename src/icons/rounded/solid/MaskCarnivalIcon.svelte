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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.514 10.972a3.825 3.825 0 0 0-3.028-.944 35.867 35.867 0 0 0-6.447 1.39C13.359 8.913 15.75 8 18 8a3 3 0 0 0 0-6 6.973 6.973 0 0 0-5 2.111V1a1 1 0 0 0-2 0v3.11A6.977 6.977 0 0 0 6 2a3 3 0 0 0 0 6c2.25 0 4.641.913 4.961 3.418a35.887 35.887 0 0 0-6.447-1.39 3.831 3.831 0 0 0-3.028.944 4.528 4.528 0 0 0-1.469 3.4C.017 23.062 4.852 24 6.931 24a5.38 5.38 0 0 0 3.09-1.185A3.667 3.667 0 0 1 12 21.967a3.667 3.667 0 0 1 1.979.848A5.383 5.383 0 0 0 17.069 24c2.079 0 6.914-.938 6.914-9.625a4.532 4.532 0 0 0-1.469-3.403Zm-16.358 8.3c-1.268.352-1.746-.964-2.135-3.114a1.167 1.167 0 0 1 1.316-1.423A37.247 37.247 0 0 1 11 16.6c-2.3.239-3.636 2.339-4.844 2.674Zm13.823-3.112c-.389 2.15-.867 3.466-2.135 3.114C16.636 18.939 15.3 16.839 13 16.6a37.247 37.247 0 0 1 5.663-1.858 1.167 1.167 0 0 1 1.316 1.418Z"/></svg>
  