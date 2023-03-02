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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.022 9.01c-.295-3.7-2.084-4.643-2-6.5.312-3.871 6.366-2.912 4.725.9a83.854 83.854 0 0 0-2.725 5.6Zm9.614 1.281c-1.747.917-3.739 1.909-5.615 2.719 3.7.3 4.631 2.083 6.487 2 3.843-.305 2.945-6.336-.872-4.719Zm3.381-6.409a3.9 3.9 0 0 0-6.607-2.737c-.488.488-3.981 6.721-5.984 10.328-3.006-2.766-6.979-3.553-9.961-.524-2 1.916-1.291 6.491-1.448 9.035a4.018 4.018 0 0 0 4 4.016c2.539-.156 7.145.567 9.061-1.428 2.758-2.762 2.539-6.524-.515-9.958 3.584-1.981 9.761-5.432 10.322-6a3.846 3.846 0 0 0 1.132-2.732Z"/></svg>
  