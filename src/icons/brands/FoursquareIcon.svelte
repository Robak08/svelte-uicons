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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><defs><style>.cls-1{isolation:isolate;}</style></defs><g id="Foursquare" class="cls-1"><path d="M6.009 4.344h4.514v.741H6.758v2.074h3.347V7.9H6.758v3h-.749ZM5.878 17.3l.732-.166a1.621 1.621 0 0 0 1.778 1.447c.915 0 1.638-.427 1.638-1.124 0-.5-.366-.915-1.795-1.342-1.621-.459-2.161-1.052-2.161-1.923 0-1.124.906-1.726 2.222-1.726a2.128 2.128 0 0 1 2.353 1.778l-.732.166a1.467 1.467 0 0 0-1.647-1.2c-.837 0-1.429.314-1.429.915 0 .488.383.863 1.708 1.281 1.577.488 2.257 1.02 2.257 2.031 0 1.254-1.055 1.908-2.4 1.908A2.3 2.3 0 0 1 5.878 17.3ZM11.7 15.917a3.22 3.22 0 1 1 6.423 0 3.589 3.589 0 0 1-.863 2.414c.262.262.514.523.767.8l-.54.523a41.81 41.81 0 0 0-.8-.828 3.249 3.249 0 0 1-4.987-2.909Zm4.419 2.353a20.21 20.21 0 0 0-.767-.706l.523-.531c.278.244.557.5.819.749a2.887 2.887 0 0 0 .627-1.874 2.417 2.417 0 1 0-4.8 0 2.464 2.464 0 0 0 2.4 2.685 2.211 2.211 0 0 0 1.197-.323Z"/></g></svg>
  