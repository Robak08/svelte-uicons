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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.637 11.851.653 15.104a.997.997 0 0 0-.366 1.647l2.793 2.793L.3 22.325a.999.999 0 1 0 1.414 1.414l2.78-2.78 2.793 2.793a1 1 0 0 0 1.648-.367l3.254-8.984.006-.017a1.988 1.988 0 0 0-.479-2.062 1.991 1.991 0 0 0-2.077-.472Zm-2.048 9.375-4.777-4.777 7.491-2.718-2.714 7.495Zm16.418-11.194c0 5.514-4.486 10-10 10a1 1 0 1 1 0-2c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8a1 1 0 1 1-2 0c0-5.514 4.486-10 10-10s10 4.486 10 10Zm-6 0c0-2.206-1.794-4-4-4A3.99 3.99 0 0 0 10.311 8.5a1 1 0 1 1-1.848-.767 5.985 5.985 0 0 1 5.544-3.701c3.309 0 6 2.691 6 6a5.983 5.983 0 0 1-3.705 5.545.996.996 0 0 1-1.307-.541 1 1 0 0 1 .541-1.306 3.99 3.99 0 0 0 2.471-3.697Z"/></svg>
  