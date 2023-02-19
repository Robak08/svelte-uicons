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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-plane-tail {customClass}"><path d="M22.61 16.085a85.882 85.882 0 0 0-4.225-1.401l3.077-11.539a2.483 2.483 0 0 0-.433-2.168A2.485 2.485 0 0 0 19.047 0h-.298a4.52 4.52 0 0 0-3.6 1.801l-5.851 7.8C8.124 11.166 6.342 12 5.506 12H1a1 1 0 1 0 0 2h2.008c6.901 0 14.818 2.484 18.924 3.966.029.011.069.025.068.096 0 .071-.04.085-.069.095-4.104 1.436-12.021 3.844-18.923 3.844H1a1 1 0 1 0 0 2h2.008c7.196 0 15.358-2.479 19.583-3.956.853-.298 1.405-1.072 1.409-1.973s-.541-1.681-1.39-1.986ZM10.899 10.8 16.75 3c.47-.626 1.218-1 2-1h.298a.49.49 0 0 1 .396.195.494.494 0 0 1 .087.434l-3.066 11.498c-2.246-.622-4.745-1.206-7.292-1.604a8.69 8.69 0 0 0 1.727-1.722ZM8 19a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2H8Z"/></svg>
  