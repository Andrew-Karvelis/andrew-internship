import React from "react";
import Skeleton from "./Skeleton";

function SkeletonItem() {
  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <Skeleton width="600px" height="600px" />
      </div>
      <div className="col-md-6">
        <div className="s_info">
          <h2>
            <Skeleton width="300px" height="30px" />
          </h2>

          <div className="item_info_counts">
            <Skeleton width="30px" height="30px" />

            <Skeleton width="30px" height="30px" />
          </div>
          <p>
            <Skeleton width="400px" height="15px" />
          </p>
          <p>
            <Skeleton width="400px" height="15px" />
          </p>
          <p>
            <Skeleton width="400px" height="15px" />
          </p>
          <div className="d-flex flex-row">
            <div className="mr40">
              <h6>Owner</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <Skeleton width="60px" height="60px" borderRadius="50px" />
                  <i className="fa fa-check"></i>
                </div>
                <div className="author_list_info">
                  <div>
                    {" "}
                    <Skeleton width="100px" height="15px" />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="de_tab tab_simple">
            <div className="de_tab_content">
              <h6>Creator</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <Skeleton width="60px" height="60px" borderRadius="50px" />
                  <i className="fa fa-check"></i>
                </div>
                <div className="author_list_info">
                  <Skeleton width="100px" height="15px" />
                </div>
              </div>
            </div>
            <div className="spacer-40"></div>
            <h6>Price</h6>
            <div className="nft-item-price">
              <span>
                <Skeleton width="30px" height="15px" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonItem;
