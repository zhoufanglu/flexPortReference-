<template>
    <div class="p-footer-com">
        <div class="container">
            <div class="top-panel">
                <div>
                    <img data-v-04966bfe="" src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDUzLjEgMjMyLjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwNTMuMSAyMzIuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPHBhdGggZmlsbD0iIzMyNDM1NCIgZD0iTTI2MjUuMywxODg5LjF2LTE0Ni41aDQ3Ljh2MTQwLjVjMCw5LjksMi4yLDEyLjMsMTIuMywxMi4zaDQuMWw1LjYsMzguOGMtMy42LDAuNS0xOC40LDEuNS0yNy4zLDEuNQoJQzI2NDEuNSwxOTM1LjcsMjYyNS4zLDE5MjYuNSwyNjI1LjMsMTg4OS4xeiIvPgo8cGF0aCBmaWxsPSIjMzI0MzU0IiBkPSJNMjk5MS4yLDE3OTkuN2wzNy4yLTIuOWwzLjYsMTEuMWM3LjUtNywyMC41LTE0LDQ4LjUtMTRjNDguMywwLDU5LjMsMzQsNTkuMyw3MS45YzAsMzguMS0xMi4zLDcxLjctNjIuMiw3MS43CgljLTIyLjIsMC0zMi42LTUuMS0zOC42LTEwLjZ2NDguM2gtNDcuOFYxNzk5Ljd6IE0zMDkxLjMsMTg2Ny43YzAtMTYuMi0yLjktMzAuNC0yMy42LTMwLjRjLTIyLjIsMC0yOC43LDExLjMtMjguNywzMC40CglzNC44LDI5LjQsMjguNywyOS40QzMwODcuOSwxODk3LjEsMzA5MS4zLDE4ODMuOCwzMDkxLjMsMTg2Ny43eiIvPgo8cGF0aCBmaWxsPSIjMzI0MzU0IiBkPSJNMzMxMC4yLDE3OTkuN2wzNy4yLTIuOWw0LjgsMTQuNWM2LTguMiwyMi43LTE1LjIsNDIuNS0xNS45djQ2Yy0zMS44LDAuMi0zNi43LDkuNy0zNi43LDI4LjZ2NjUuNGgtNDcuOAoJVjE3OTkuN3oiLz4KPHBhdGggZmlsbD0iIzMyNDM1NCIgZD0iTTM0MDgsMTc5NS40aDI0LjZsNy43LTI4LjFsMzYuOS04djM2aDMwLjJ2NDZoLTMwLjJ2MzkuOWMwLDkuNCwxLjUsMTQuMiwxNi40LDE0LjJoMTMuOHYzOS44CgljLTcuMiwwLjUtMTUuMiwwLjctMjQuMSwwLjdjLTQwLjMsMC01My42LTEyLjgtNTMuNi00Ny41di00Ny4xSDM0MDhWMTc5NS40eiIvPgo8cmVjdCB4PSIzNTIwLjYiIHk9IjE4OTUuNCIgZmlsbD0iI0ZBNTk1OSIgd2lkdGg9IjM5LjgiIGhlaWdodD0iMzkuOCIvPgo8cGF0aCBmaWxsPSIjMzI0MzU0IiBkPSJNMjUwNy4zLDE3OTdoMjYuMXYtMi43YzAtMzQuNywxMy01Mi4xLDU3LjktNTIuMWMxMS44LDAsMTQsMC4yLDE5LjgsMC43djM4LjhoLTEzLjMKCWMtMTMuNywwLTE2LjYsMy40LTE2LjYsMTIuM3YyLjloMjkuOXY0MC41aC0yOS45djk3LjdoLTQ3Ljh2LTk3LjdoLTI2LjFMMjUwNy4zLDE3OTdMMjUwNy4zLDE3OTd6Ii8+CjxwYXRoIGZpbGw9IiMzMjQzNTQiIGQ9Ik0yNzk5LjEsMTg5NGMtNy45LDQuNi0xMiw1LjctMjcuNyw1LjdjLTE4LjcsMC0yNS45LTYuNi0yOC4zLTE3LjloOTEuOGMxLjctNDguNy0yLjQtODgtNjMuNS04OAoJYy02MS40LDAtNzQuMywzMy44LTc0LjMsNzEuNWMwLDM4LjYsMTIuOSw3Mi42LDc0LjMsNzIuNmMyNC4yLDAsMzkuNS00LjUsNTUuNy0xNUwyNzk5LjEsMTg5NHogTTI3NjkuOSwxODMzCgljMTkuNywwLDIxLjEsOS40LDIxLjgsMjAuNmgtNDkuMkMyNzQ0LjUsMTg0MC40LDI3NTAuNywxODMzLDI3NjkuOSwxODMzeiIvPgo8Zz4KCTxwb2x5Z29uIGZpbGw9IiMzMjQzNTQiIHBvaW50cz0iMjkyOS42LDE5MzUuMyAyOTA2LjIsMTkwMS44IDI4ODIuOCwxOTM1LjMgMjgyOS40LDE5MzUuMyAyODc5LjQsMTg2NCAyODM0LDE3OTkuNyAyODg3LjksMTc5OS43IAoJCTI5MDYuNCwxODI1LjkgMjkyNC45LDE3OTkuNyAyOTc5LjUsMTc5OS43IDI5MzMuMiwxODYzLjcgMjk4My40LDE5MzUuMyAJIi8+CjwvZz4KPHBhdGggZmlsbD0iIzMyNDM1NCIgZD0iTTMxNDkuNywxODY1LjdjMC00NS44LDIxLTcxLjksNzUtNzEuOXM3NC44LDI2LjEsNzQuOCw3MS45cy0yMC43LDcyLjEtNzQuOCw3Mi4xCglDMzE3MC43LDE5MzcuOSwzMTQ5LjcsMTkxMS42LDMxNDkuNywxODY1Ljd6IE0zMjUxLjUsMTg2Ny4yYzAtMTcuNC00LjMtMjkuOS0yNi44LTI5LjljLTIyLjQsMC0yNi44LDEyLjUtMjYuOCwyOS45CgljMCwxNy4xLDQuMywyOS45LDI2LjgsMjkuOVMzMjUxLjUsMTg4NC4zLDMyNTEuNSwxODY3LjJ6Ii8+CjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMTguMywxNDcuMVYwLjZoNDcuOHYxNDAuNWMwLDkuOSwyLjIsMTIuMywxMi4zLDEyLjNoNC4xbDUuNiwzOC44Yy0zLjYsMC41LTE4LjQsMS41LTI3LjMsMS41CglDMTM0LjUsMTkzLjcsMTE4LjMsMTg0LjUsMTE4LjMsMTQ3LjF6Ii8+CjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00ODQuMiw1Ny43bDM3LjItMi45bDMuNiwxMS4xYzcuNS03LDIwLjUtMTQsNDguNS0xNGM0OC4zLDAsNTkuMywzNCw1OS4zLDcxLjljMCwzOC4xLTEyLjMsNzEuNy02Mi4yLDcxLjcKCWMtMjIuMiwwLTMyLjYtNS4xLTM4LjYtMTAuNlYyMzNoLTQ3LjhWNTcuN3ogTTU4NC4zLDEyNS43YzAtMTYuMi0yLjktMzAuNC0yMy42LTMwLjRjLTIyLjIsMC0yOC43LDExLjMtMjguNywzMC40CglzNC44LDI5LjQsMjguNywyOS40QzU4MC45LDE1NS4xLDU4NC4zLDE0MS44LDU4NC4zLDEyNS43eiIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNODAzLjIsNTcuN2wzNy4yLTIuOWw0LjgsMTQuNWM2LTguMiwyMi43LTE1LjIsNDIuNS0xNS45djQ2Yy0zMS44LDAuMi0zNi43LDkuNy0zNi43LDI4LjZ2NjUuNGgtNDcuOFY1Ny43eiIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNOTAxLDUzLjRoMjQuNmw3LjctMjguMWwzNi45LTh2MzZoMzAuMnY0NmgtMzAuMnYzOS45YzAsOS40LDEuNSwxNC4yLDE2LjQsMTQuMmgxMy44djM5LjgKCWMtNy4yLDAuNS0xNS4yLDAuNy0yNC4xLDAuN2MtNDAuMywwLTUzLjYtMTIuOC01My42LTQ3LjVWOTkuM0g5MDFWNTMuNHoiLz4KPHJlY3QgeD0iMTAxMy42IiB5PSIxNTMuNCIgZmlsbD0iI0ZBNTk1OSIgd2lkdGg9IjM5LjgiIGhlaWdodD0iMzkuOCIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMC4zLDU1aDI2LjF2LTIuN2MwLTM0LjcsMTMtNTIuMSw1Ny45LTUyLjFjMTEuOCwwLDE0LDAuMiwxOS44LDAuN3YzOC44SDkwLjdDNzcsMzkuNyw3NC4xLDQzLjEsNzQuMSw1MnYzSDEwNAoJdjQwLjVINzQuMXY5Ny43SDI2LjNWOTUuNWgtMjZWNTV6Ii8+CjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTIuMSwxNTJjLTcuOSw0LjYtMTIsNS43LTI3LjcsNS43Yy0xOC43LDAtMjUuOS02LjYtMjguMy0xNy45aDkxLjhjMS43LTQ4LjctMi40LTg4LTYzLjUtODgKCWMtNjEuNCwwLTc0LjMsMzMuOC03NC4zLDcxLjVjMCwzOC42LDEyLjksNzIuNiw3NC4zLDcyLjZjMjQuMiwwLDM5LjUtNC41LDU1LjctMTVMMjkyLjEsMTUyeiBNMjYyLjksOTFjMTkuNywwLDIxLjEsOS40LDIxLjgsMjAuNgoJaC00OS4yQzIzNy41LDk4LjQsMjQzLjcsOTEsMjYyLjksOTF6Ii8+CjxnPgoJPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSI0MjIuNiwxOTMuMyAzOTkuMiwxNTkuOCAzNzUuOCwxOTMuMyAzMjIuNCwxOTMuMyAzNzIuNCwxMjIgMzI3LDU3LjcgMzgwLjksNTcuNyAzOTkuNCw4My45IAoJCTQxNy45LDU3LjcgNDcyLjUsNTcuNyA0MjYuMiwxMjEuNyA0NzYuNCwxOTMuMyAJIi8+CjwvZz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY0Mi43LDEyMy43YzAtNDUuOCwyMS03MS45LDc1LTcxLjlzNzQuOCwyNi4xLDc0LjgsNzEuOXMtMjAuNyw3Mi4xLTc0LjgsNzIuMQoJQzY2My43LDE5NS45LDY0Mi43LDE2OS42LDY0Mi43LDEyMy43eiBNNzQ0LjUsMTI1LjJjMC0xNy40LTQuMy0yOS45LTI2LjgtMjkuOWMtMjIuNCwwLTI2LjgsMTIuNS0yNi44LDI5LjkKCWMwLDE3LjEsNC4zLDI5LjksMjYuOCwyOS45Qzc0MC4yLDE1NS4xLDc0NC41LDE0Mi4zLDc0NC41LDEyNS4yeiIvPgo8L3N2Zz4K" alt="Flexport" class="_13qqxpa">
                </div>
                <div class="col-panel">
                    <label>WHY FLEXPORT</label>
                    <span>Our Vision</span>
                    <span>Our Tech Platform</span>
                    <span>Our Service Model</span>
                </div>
                <div class="col-panel">
                    <label>Ocean Shipping</label>
                    <span>FCL Shipping</span>
                    <span>LCL Shipping</span>
                    <span>OceanMatch</span>
                    <span>Track and Trace</span>
                    <span>Air Freight</span>
                    <span>Ground Transportation</span>
                </div>
                <div class="col-panel">
                    <label>WHY FLEXPORT</label>
                    <span>Our Vision</span>
                    <span>Our Tech Platform</span>
                    <span>Our Service Model</span>
                </div>
                <div class="col-panel">
                    <label>WHY FLEXPORT</label>
                    <span>Our Vision</span>
                    <span>Our Tech Platform</span>
                    <span>Our Service Model</span>
                </div>
            </div>

            <div class="iconn-list">
                <Icon type="logo-twitter" />
                <Icon type="logo-facebook" />
                <Icon type="logo-linkedin" />
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterCom"
    }
</script>

<style scoped lang="scss">
    .p-footer-com {
        @mixin vertical-center { // 垂直水平居中
            display: flex;
            align-items: center;
            justify-content: center;
        }
        $pink:rgb(250,89,89);

        height: 570px;
        @include vertical-center;
        position: relative;
        //border: solid 1px green;
        background-color: #24303e;
        .container {
            width: 1200px;
            box-sizing: border-box;
            padding: 30px 0;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            z-index: 2;
            //border: solid 1px red;
            .top-panel{
                width: 100%;
                @include vertical-center;
                align-items: flex-start;
                justify-content: space-between;
                >div:first-child{
                    img{
                        width: 135px;
                        height: 30px;
                    }
                }
                .col-panel{
                    width: 165px;
                    display: flex;
                    flex-direction: column;
                    label{
                        font-family: "GT-America-Extended-Bold" !important;
                        color: #9DA7B6 !important;
                        font-size: 10px !important;
                        letter-spacing: 1px !important;
                        margin-bottom: 30px;
                    }
                    span{
                        font-weight: bolder;
                        color: white;
                        font-size: 14px !important;
                        margin-bottom: 16px;
                        font-family: "GT-America-Standard-Regular" !important;
                        &:hover{
                            color: $pink;
                            cursor: pointer;
                        }
                    }
                }
            }
            .iconn-list{
                @include vertical-center;
                margin-top: 30px;
                i{
                    margin-right: 20px;
                    font-size: 30px;
                    color: #9DA7B6 !important;
                }
            }
        }
    }

</style>