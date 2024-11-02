
   
    import Image from "next/image";
    import Link from "next/link"
    import Pizza1 from "@/app/images/1.jpeg";
    import Pizza3 from "@/app/images/3.jpeg";
    import Pizza4 from "@/app/images/4.jpg";
    import Pizza5 from "@/app/images/5.jpeg";
    import Pizza6 from "@/app/images/6.jpeg";
    import Pizza8 from "@/app/images/8.jpeg";
    
    import  "@/app/blog-1/page"
    import  "@/app/blog-2/page"
    import  "@/app/blog-3/page"
    import  "@/app/blog-4/page"
    import  "@/app/blog-5/page"
    import  "@/app/blog-6/page"
    import  "@/app/blog-7/page"
    export default function Home() {
    
        return(
          <div className="parentContainer rotate-scale-up">
            <div className="childContainer bounce-in-right">
              <div className="imageContainer"><Image src={Pizza6} alt="pic"/></div>
              <h1 className="title">Blog Title</h1>
              <p className="description">
              pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some tomatoes ., {" "}
              </p>
              <Link href="blog-1 ">
              <button className="readMore">Read More
              </button>
              </Link>
          </div>
      
            <div className="childContainer bounce-in-right">
              <div className="imageContainer"><Image src={Pizza1} alt="pic" /></div>
              <h1 className="title">Blog Title</h1>
              <p className="description">
              pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some tomatoes.
              </p>
              <Link href="blog-2">
              <button className="readMore">Read More
              </button>
              </Link>
            </div>
          
        
            <div className="childContainer bounce-in-right">
              <div className="imageContainer"><Image src={Pizza4} alt="pic"  /></div>
              <h1 className="title">Blog Title</h1>
              <p className="description">
              pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some tomatoes{" "}
              </p>
         <Link href="blog-3">
              <button className="readMore">Read More
              </button>
              </Link>
            </div>
            <div className="childContainer bounce-in-right">
              <div className="imageContainer"><Image src={Pizza3} alt="pic"  /></div>
              <h1 className="title">Blog Title</h1>
              <p className="description">
              pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some tomatoes{" "}
              </p>
              <Link href="blog-4">
              <button className="readMore">Read More
              </button>
              </Link>
            </div>
            <div className="childContainer bounce-in-right">
              <div className="imageContainer"><Image src={Pizza5} alt="pic"  /></div>
              <h1 className="title">Blog Title</h1>
              <p className="description">
              pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some tomatoes{" "}
              </p>
              <Link href="blog-5">
              <button className="readMore">Read More
              </button>
              </Link>
            </div>
            <div className="childContainer bounce-in-right">
              <div className="imageContainer"><Image src={Pizza3} alt="pic"  /></div>
              <h1 className="title">Blog Title</h1>
              <p className="description">
              pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some tomatoes{" "}
              </p>
              <Link href="blog-6">
              <button className="readMore">Read More
              </button>
              </Link>
            </div>
            <div className="childContainer bounce-in-right">
              <div className="imageContainer"><Image src={Pizza8} alt="pic"  /></div>
              <h1 className="title">Blog Title</h1>
              <p className="description">
              pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some tomatoes{" "}
              </p>
              <Link href="blog-7">
              <button className="readMore">Read More
              </button>
              </Link>
         </div>
         </div>
          
      
        
       );
     }
    
  
 

