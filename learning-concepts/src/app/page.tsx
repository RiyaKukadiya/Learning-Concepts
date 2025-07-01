import { motion } from "framer-motion";
import CardList from "../components/CardList";
import DraggableList from "../components/DraggableList";
import fetchApi from "@/utils/strapi";


export default async function HomePage() {
  // Fetch card list data from Strapi
  const response = await fetchApi({ endpoint: "api/homepage" });
  const cards = response?.data || [];

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      <CardList cards={cards} />
      <div className="w-full flex flex-row justify-center">
        <DraggableList items={["React", "Vue", "Angular", "Svelte", "Solid"]} />
      </div>
      <div className="w-3/5 flex justify-center mt-4">
        {/* SVG animation portion of moving dots according to paths */}
        <motion.svg
          width={"1016"}
          hanging={"741"}
          viewBox="0 0 1016 741"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"w-full h-full"}
        >
          {/* center path */}
          <path d="M508 17.5V626" stroke="#AEC0FF" strokeOpacity="0.25" />
          <path d="M508 17.5V626" id="center-path" />

          {/* left 2 path */}
          <path
            d="M169.5 -2C269.437 90.6881 493.102 227.188 487.911 634.5"
            stroke="#AEC0FF"
            strokeOpacity="0.25"
          />
          <path
            d="M169.5 -2C269.437 90.6881 493.102 227.188 487.911 634.5"
            id="left-path_2"
          />

          {/* left 1 path */}
          <path
            d="M1 54.5C125.54 75.9563 474.405 261.394 463 652"
            stroke="#AEC0FF"
            strokeOpacity="0.25"
          />
          <path
            d="M1 54.5C125.54 75.9563 474.405 261.394 463 652"
            id="left-path_1"
          />

          {/* right path 2 */}
          <path
            d="M1015.04 54.5C890.503 75.9563 541.868 261.894 553.273 652.5"
            stroke="#AEC0FF"
            strokeOpacity="0.25"
          />
          <path
            d="M1015.04 54.5C890.503 75.9563 541.868 261.894 553.273 652.5"
            id="right-path_2"
          />

          {/* right path 1 */}
          <path
            d="M847 -2C747.515 90.2697 525.415 225.956 528.532 629"
            stroke="#AEC0FF"
            strokeOpacity="0.25"
          />
          <path
            d="M847 -2C747.515 90.2697 525.415 225.956 528.532 629"
            id="right-path_1"
          />

          {/* left 1 circle */}
          <circle r="5" fill="#A373FF">
            <animateMotion dur="5s" repeatCount="indefinite" begin="0s">
              <mpath href="#left-path_1" />
            </animateMotion>
          </circle>

          {/* right 2 circle */}
          <circle r="5" fill="#A373FF">
            <animateMotion dur="5s" repeatCount="indefinite" begin="0s">
              <mpath href="#right-path_2" />
            </animateMotion>
          </circle>

          {/* left 2 circle */}
          <circle r="5" fill="#3087F7">
            <animateMotion dur="5s" repeatCount="indefinite" begin="0s">
              <mpath href="#left-path_2" />
            </animateMotion>
          </circle>

          {/* center circle */}
          <circle r="5" fill="#A373FF">
            <animateMotion dur="5s" repeatCount="indefinite" begin="0s">
              <mpath href="#center-path" />
            </animateMotion>
          </circle>

          {/* right 1 circle */}
          <circle r="5" fill="#3087F7">
            <animateMotion dur="5s" repeatCount="indefinite" begin="0s">
              <mpath href="#right-path_1" />
            </animateMotion>
          </circle>

          <motion.g initial={{ opacity: 1, scale: 1.2 }}>
            <circle
              cx="509"
              cy="669"
              r="53"
              fill="rgb(var(--theme-background-dark))"
            />
            <circle
              cx="509"
              cy="669"
              r="52.5"
              stroke="#AEC0FF"
              strokeOpacity="0.25"
            />
            <ellipse
              cx="509"
              cy="669.002"
              rx="34"
              ry="35"
              fill="rgb(var(--theme-background-dark))"
            />
            <path
              d="M542.5 669.002C542.5 688.07 527.488 703.502 509 703.502C490.512 703.502 475.5 688.07 475.5 669.002C475.5 649.934 490.512 634.502 509 634.502C527.488 634.502 542.5 649.934 542.5 669.002Z"
              stroke="#AEC0FF"
              strokeOpacity="0.25"
            />
            <path
              d="M516.202 629.48L517.836 623.387L518.574 623.585L517.764 626.608L517.835 626.627L521.383 624.338L522.347 624.596L519.051 626.659L520.713 630.69L519.82 630.451L518.461 627.05L517.47 627.703L516.94 629.678L516.202 629.48Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M528.519 626.869L525.769 632.547L525.082 632.214L527.832 626.536L528.519 626.869Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M530.525 634.911L529.883 634.432L535.512 630.76L536.144 631.232L534.229 637.674L533.587 637.195L535.251 631.811L535.212 631.781L530.525 634.911ZM532.236 633.112L534.824 635.043L534.418 635.586L531.83 633.656L532.236 633.112Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M537.813 640.657L542.642 636.597L544.014 638.229C544.331 638.606 544.527 638.97 544.602 639.32C544.678 639.669 544.654 639.996 544.528 640.3C544.403 640.604 544.198 640.875 543.913 641.115C543.629 641.354 543.327 641.508 543.01 641.577C542.692 641.645 542.369 641.612 542.041 641.477C541.714 641.341 541.394 641.086 541.079 640.712L539.969 639.392L540.497 638.947L541.592 640.249C541.809 640.507 542.021 640.683 542.228 640.776C542.437 640.872 542.641 640.897 542.838 640.851C543.039 640.806 543.236 640.702 543.43 640.539C543.623 640.377 543.761 640.199 543.845 640.005C543.929 639.811 543.944 639.601 543.889 639.376C543.835 639.15 543.699 638.907 543.48 638.646L542.615 637.618L538.305 641.242L537.813 640.657ZM541.894 641.106L540.723 644.118L540.152 643.439L541.339 640.446L541.894 641.106Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M543.66 648.015L543.3 647.299L549.976 646.526L550.331 647.23L545.742 652.14L545.381 651.425L549.273 647.349L549.251 647.305L543.66 648.015ZM545.994 647.168L547.448 650.051L546.843 650.356L545.389 647.474L545.994 647.168Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M554.642 661.23L555.317 661.171L555.734 665.884L555.059 665.944L554.884 663.967L549.275 664.463L549.208 663.702L554.817 663.206L554.642 661.23Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M549.633 671.269L555.885 672.111L555.377 675.885L554.705 675.794L555.112 672.778L552.999 672.494L552.619 675.315L551.947 675.224L552.327 672.403L550.202 672.117L549.79 675.182L549.118 675.092L549.633 671.269Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M550.533 686.234L550.807 685.521C551.028 685.558 551.237 685.553 551.433 685.508C551.628 685.464 551.807 685.387 551.969 685.278C552.134 685.172 552.277 685.039 552.4 684.879C552.523 684.72 552.622 684.542 552.697 684.347C552.834 683.99 552.868 683.632 552.799 683.274C552.73 682.917 552.552 682.586 552.267 682.28C551.981 681.977 551.583 681.727 551.073 681.531C550.563 681.335 550.1 681.254 549.685 681.288C549.268 681.324 548.915 681.451 548.624 681.669C548.332 681.889 548.118 682.178 547.981 682.534C547.906 682.73 547.861 682.928 547.845 683.129C547.829 683.33 547.846 683.524 547.895 683.712C547.945 683.903 548.027 684.08 548.143 684.243C548.26 684.409 548.411 684.552 548.598 684.673L548.324 685.386C548.044 685.216 547.812 685.015 547.629 684.782C547.446 684.549 547.311 684.295 547.226 684.02C547.142 683.745 547.107 683.46 547.122 683.165C547.136 682.871 547.2 682.575 547.314 682.278C547.507 681.776 547.801 681.376 548.197 681.079C548.593 680.783 549.06 680.609 549.598 680.559C550.137 680.508 550.717 680.602 551.338 680.841C551.959 681.08 552.453 681.398 552.819 681.796C553.185 682.194 553.416 682.636 553.511 683.122C553.606 683.607 553.557 684.101 553.364 684.603C553.25 684.9 553.1 685.163 552.913 685.39C552.726 685.62 552.509 685.808 552.261 685.955C552.015 686.102 551.746 686.201 551.454 686.252C551.163 686.303 550.856 686.297 550.533 686.234Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M544.519 689.12L549.671 692.762L549.23 693.386L546.935 691.764L544.993 694.511L547.288 696.133L546.846 696.757L541.695 693.114L542.136 692.491L544.44 694.12L546.382 691.373L544.078 689.744L544.519 689.12Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M542.367 702.156L539.418 701.238L539.381 701.27L539.871 704.319L539.191 704.908L538.624 701.225L535.059 700.14L535.739 699.551L538.655 700.432L538.692 700.4L538.234 697.388L538.914 696.799L539.444 700.515L543.046 701.567L542.367 702.156Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M520.179 707.93C520.327 707.896 520.466 707.919 520.597 708C520.728 708.081 520.811 708.195 520.846 708.343C520.881 708.491 520.857 708.631 520.776 708.761C520.695 708.892 520.581 708.975 520.433 709.01C520.285 709.045 520.146 709.022 520.015 708.941C519.884 708.86 519.801 708.745 519.766 708.597C519.743 708.499 519.747 708.403 519.778 708.31C519.806 708.216 519.856 708.135 519.926 708.066C519.995 707.999 520.079 707.954 520.179 707.93Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M503.051 709.099L501.496 715.213L500.756 715.025L501.527 711.992L501.455 711.974L497.937 714.308L496.97 714.063L500.239 711.957L498.525 707.948L499.421 708.176L500.824 711.559L501.806 710.893L502.311 708.911L503.051 709.099Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M490.765 711.87L493.441 706.156L494.133 706.481L491.457 712.194L490.765 711.87Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M488.657 703.854L489.305 704.325L483.723 708.069L483.085 707.605L484.918 701.139L485.566 701.609L483.971 707.015L484.01 707.044L488.657 703.854ZM486.969 705.674L484.357 703.777L484.755 703.229L487.368 705.126L486.969 705.674Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M481.293 698.201L476.516 702.322L475.124 700.708C474.802 700.334 474.601 699.973 474.522 699.624C474.442 699.275 474.462 698.949 474.584 698.643C474.705 698.337 474.907 698.063 475.188 697.82C475.469 697.578 475.769 697.42 476.086 697.347C476.403 697.274 476.726 697.303 477.056 697.434C477.384 697.566 477.707 697.817 478.027 698.187L479.154 699.493L478.631 699.944L477.52 698.656C477.3 698.401 477.086 698.228 476.877 698.137C476.667 698.045 476.463 698.022 476.266 698.07C476.066 698.118 475.87 698.225 475.679 698.39C475.488 698.555 475.351 698.735 475.27 698.93C475.189 699.125 475.177 699.334 475.235 699.558C475.291 699.784 475.43 700.025 475.653 700.284L476.53 701.301L480.794 697.622L481.293 698.201ZM477.208 697.803L478.339 694.776L478.919 695.448L477.771 698.456L477.208 697.803Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M475.357 690.919L475.727 691.629L469.061 692.489L468.697 691.79L473.223 686.821L473.593 687.531L469.753 691.656L469.776 691.7L475.357 690.919ZM473.035 691.795L471.543 688.932L472.145 688.619L473.636 691.482L473.035 691.795Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M464.202 677.845L463.528 677.913L463.051 673.205L463.725 673.137L463.925 675.111L469.528 674.543L469.605 675.303L464.002 675.871L464.202 677.845Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M469.08 667.738L462.817 666.976L463.277 663.197L463.95 663.279L463.582 666.3L465.698 666.557L466.042 663.732L466.715 663.814L466.371 666.639L468.5 666.898L468.873 663.828L469.546 663.91L469.08 667.738Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M467.991 652.787L467.726 653.504C467.504 653.47 467.296 653.477 467.101 653.526C466.906 653.572 466.728 653.651 466.567 653.762C466.404 653.87 466.262 654.005 466.141 654.166C466.021 654.327 465.924 654.506 465.851 654.703C465.719 655.061 465.689 655.419 465.763 655.777C465.837 656.133 466.019 656.461 466.308 656.763C466.598 657.063 466.999 657.308 467.511 657.497C468.024 657.686 468.488 657.762 468.903 657.722C469.319 657.681 469.671 657.55 469.959 657.328C470.247 657.104 470.458 656.813 470.59 656.454C470.663 656.258 470.706 656.059 470.718 655.858C470.731 655.657 470.712 655.463 470.661 655.275C470.609 655.085 470.524 654.909 470.406 654.747C470.288 654.583 470.134 654.442 469.945 654.324L470.21 653.608C470.493 653.773 470.727 653.972 470.913 654.202C471.1 654.433 471.237 654.686 471.326 654.959C471.414 655.233 471.452 655.517 471.441 655.813C471.431 656.107 471.371 656.403 471.26 656.702C471.074 657.207 470.785 657.61 470.393 657.912C470.001 658.214 469.536 658.393 468.998 658.451C468.46 658.508 467.879 658.421 467.255 658.191C466.631 657.96 466.133 657.648 465.762 657.254C465.391 656.861 465.154 656.422 465.053 655.938C464.952 655.454 464.994 654.96 465.181 654.455C465.291 654.156 465.438 653.892 465.622 653.662C465.806 653.43 466.021 653.239 466.267 653.089C466.511 652.939 466.779 652.836 467.07 652.782C467.36 652.727 467.667 652.729 467.991 652.787Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M473.97 649.828L468.772 646.252L469.205 645.623L471.519 647.215L473.426 644.444L471.111 642.851L471.544 642.222L476.742 645.798L476.309 646.427L473.984 644.828L472.078 647.599L474.403 649.199L473.97 649.828Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M475.955 636.764L478.914 637.644L478.951 637.612L478.422 634.569L479.095 633.972L479.708 637.647L483.287 638.686L482.615 639.284L479.688 638.44L479.651 638.473L480.147 641.478L479.475 642.076L478.898 638.368L475.283 637.362L475.955 636.764Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M498.063 630.708C497.915 630.744 497.776 630.723 497.644 630.644C497.512 630.564 497.427 630.451 497.391 630.304C497.354 630.156 497.375 630.016 497.455 629.885C497.534 629.753 497.647 629.668 497.795 629.632C497.942 629.595 498.082 629.616 498.214 629.695C498.346 629.775 498.43 629.888 498.467 630.036C498.491 630.133 498.489 630.229 498.459 630.323C498.432 630.417 498.383 630.499 498.314 630.569C498.246 630.637 498.162 630.683 498.063 630.708Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M495 659.333V667.775L498.726 673.177L495 677.091V684.002L523.666 654.002L522.374 654.19L502.368 669.545L495 659.333Z"
              fill="rgb(var(--theme-text-color))"
            />
            <path
              d="M495.363 658.897H504.692L508.256 664.345L502.54 668.732L495.363 658.897Z"
              fill="rgb(var(--theme-logo-color))"
            />
            <path
              d="M520.475 681.321H511.033L505.617 673.697L510.606 668.498L520.475 681.321Z"
              fill="rgb(var(--theme-logo-color))"
            />
          </motion.g>
        </motion.svg>
      </div>
      <div className="grid grid-cols-3 text-center">
        <div>
          <h1> With Object-cover </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-72 h-64">
            <img
              src="/sunset.jpg"
              className="w-60 h-60 object-cover"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> With Object-contain </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-72 h-64">
            <img
              src="/sunset.jpg"
              className="w-60 h-60 object-contain"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> With Object-fill </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-72 h-64">
            <img
              src="/sunset.jpg"
              className="w-60 h-60 object-fill"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> With Object-scale-down </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-72 h-64">
            <img
              src="/sunset.jpg"
              className="w-60 h-60 object-scale-down"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> Without object property </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-72 h-64">
            <img src="/sunset.jpg" className="w-60 h-60" alt="Sunset" />
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-3 text-center">
        <div>
          <h1> With Object-cover </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-96 h-64">
            <img src="/sunset.jpg" className="object-cover" alt="Sunset" />
          </div>
        </div>
        <div>
          <h1> With Object-contain </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-96 h-64">
            <img
              src="/sunset.jpg"
              className="w-full h-full object-contain"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> With Object-fill </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-96 h-64">
            <img
              src="/sunset.jpg"
              className="w-full h-full object-fill"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> With Object-scale-down </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-96 h-64">
            <img
              src="/sunset.jpg"
              className="w-full h-full object-scale-down"
              alt="Sunset"
            />
          </div>
        </div>
        <div>
          <h1> Without object property </h1>
          <div className="border-8 border-black flex items-center justify-center m-5 w-96 h-64">
            <img src="/sunset.jpg" className="w-full h-full" alt="Sunset" />
          </div>
        </div>
      </div> */}
      <div className="w-2/3 flex justify-center mt-4">
        <img src="/Marketecture Diagram1_option A (2) (1).svg" />
      </div>
    </main>
  );
};
