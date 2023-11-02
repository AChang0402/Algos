// 1095. Find in Mountain Array

// Good for practice with binary search

function findInMountainArray(target, mountainArr){
    let l=0
    let r=mountainArr.length()-1
    while (l<r){
        let mid = Math.floor((l+r)/2)
        if(mountainArr.get(mid)<mountainArr.get(mid+1)){
            l=mid+1
        }
        else{
            r=mid
        }
    }
    let peak = l

    if(mountainArr.get(peak)==target){
        return peak
    }

    let l1 = 0
    let r1 = peak-1
    while(l1<=r1){
        let mid1 = Math.floor((l1+r1)/2)
        if(mountainArr.get(mid1)==target){
            return mid1
        }
        else if(mountainArr.get(mid1)<target){
            l1=mid1+1
        }
        else{
            r1=mid1-1
        }
    }
    let l2=peak+1
    let r2=mountainArr.length()-1
    while(l2<=r2){
        let mid2 = Math.floor((l2+r2)/2)
        if(mountainArr.get(mid2)==target){
            return mid2
        }
        else if(mountainArr.get(mid2)<target){
            r2=mid2-1
        }
        else{
            l2=mid2+1
        }
    }
    return -1
}