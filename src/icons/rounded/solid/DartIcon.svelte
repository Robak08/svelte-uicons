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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 0h-1.757a3.975 3.975 0 0 0-2.829 1.172l-3.242 3.242A4.022 4.022 0 0 0 11 7.242v3.748c-2.855 1.986-7.509 5.276-8.121 5.889a2.993 2.993 0 0 0-.577 3.4L.293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L3.714 21.7a2.965 2.965 0 0 0 3.407-.579c.613-.612 3.9-5.266 5.889-8.121h3.747a3.975 3.975 0 0 0 2.829-1.172l3.242-3.242A4.022 4.022 0 0 0 24 5.758V4a4 4 0 0 0-4-4zm-.293 5.707-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 1 1 1.414 1.414z"/></svg>
  