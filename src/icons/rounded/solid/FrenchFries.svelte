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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.16 24H5.84a5.014 5.014 0 0 1-4.9-4.018l-.881-4.395A3.017 3.017 0 0 1 3 12h18a3 3 0 0 1 2.942 3.587l-.878 4.392A5.014 5.014 0 0 1 18.16 24Zm4.483-18.06a3.45 3.45 0 0 0-3.27-1.922c1.269-4.029-4.362-5.756-5.4-1.713l-.079.4a2.975 2.975 0 0 0-3.8 0l-.079-.4C8.987-1.744 3.358-.011 4.627 4.015a3.477 3.477 0 0 0-3.441 4.568L1.677 10H3.8l-.723-2.066A1.463 1.463 0 0 1 5 6.118L5.686 10H11V5a1 1 0 1 1 2 0v5h5.314L19 6.118a1.463 1.463 0 0 1 1.922 1.816L20.2 10h2.118c.487-1.254 1.052-2.788.325-4.063Z"/></svg>
  