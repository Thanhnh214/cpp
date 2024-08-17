// Auto-generated. Do not edit!

// (in-package rtabmap_msgs.srv)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

let MapData = require('../msg/MapData.js');

//-----------------------------------------------------------

class GetMap2Request {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.global = null;
      this.optimized = null;
      this.with_images = null;
      this.with_scans = null;
      this.with_user_data = null;
      this.with_grids = null;
      this.with_words = null;
      this.with_global_descriptors = null;
    }
    else {
      if (initObj.hasOwnProperty('global')) {
        this.global = initObj.global
      }
      else {
        this.global = false;
      }
      if (initObj.hasOwnProperty('optimized')) {
        this.optimized = initObj.optimized
      }
      else {
        this.optimized = false;
      }
      if (initObj.hasOwnProperty('with_images')) {
        this.with_images = initObj.with_images
      }
      else {
        this.with_images = false;
      }
      if (initObj.hasOwnProperty('with_scans')) {
        this.with_scans = initObj.with_scans
      }
      else {
        this.with_scans = false;
      }
      if (initObj.hasOwnProperty('with_user_data')) {
        this.with_user_data = initObj.with_user_data
      }
      else {
        this.with_user_data = false;
      }
      if (initObj.hasOwnProperty('with_grids')) {
        this.with_grids = initObj.with_grids
      }
      else {
        this.with_grids = false;
      }
      if (initObj.hasOwnProperty('with_words')) {
        this.with_words = initObj.with_words
      }
      else {
        this.with_words = false;
      }
      if (initObj.hasOwnProperty('with_global_descriptors')) {
        this.with_global_descriptors = initObj.with_global_descriptors
      }
      else {
        this.with_global_descriptors = false;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type GetMap2Request
    // Serialize message field [global]
    bufferOffset = _serializer.bool(obj.global, buffer, bufferOffset);
    // Serialize message field [optimized]
    bufferOffset = _serializer.bool(obj.optimized, buffer, bufferOffset);
    // Serialize message field [with_images]
    bufferOffset = _serializer.bool(obj.with_images, buffer, bufferOffset);
    // Serialize message field [with_scans]
    bufferOffset = _serializer.bool(obj.with_scans, buffer, bufferOffset);
    // Serialize message field [with_user_data]
    bufferOffset = _serializer.bool(obj.with_user_data, buffer, bufferOffset);
    // Serialize message field [with_grids]
    bufferOffset = _serializer.bool(obj.with_grids, buffer, bufferOffset);
    // Serialize message field [with_words]
    bufferOffset = _serializer.bool(obj.with_words, buffer, bufferOffset);
    // Serialize message field [with_global_descriptors]
    bufferOffset = _serializer.bool(obj.with_global_descriptors, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type GetMap2Request
    let len;
    let data = new GetMap2Request(null);
    // Deserialize message field [global]
    data.global = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [optimized]
    data.optimized = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [with_images]
    data.with_images = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [with_scans]
    data.with_scans = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [with_user_data]
    data.with_user_data = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [with_grids]
    data.with_grids = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [with_words]
    data.with_words = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [with_global_descriptors]
    data.with_global_descriptors = _deserializer.bool(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a service object
    return 'rtabmap_msgs/GetMap2Request';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6c99a44d248df7f406229ae2372dab2e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #request
    bool global
    bool optimized
    bool with_images
    bool with_scans
    bool with_user_data
    bool with_grids
    bool with_words
    bool with_global_descriptors
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new GetMap2Request(null);
    if (msg.global !== undefined) {
      resolved.global = msg.global;
    }
    else {
      resolved.global = false
    }

    if (msg.optimized !== undefined) {
      resolved.optimized = msg.optimized;
    }
    else {
      resolved.optimized = false
    }

    if (msg.with_images !== undefined) {
      resolved.with_images = msg.with_images;
    }
    else {
      resolved.with_images = false
    }

    if (msg.with_scans !== undefined) {
      resolved.with_scans = msg.with_scans;
    }
    else {
      resolved.with_scans = false
    }

    if (msg.with_user_data !== undefined) {
      resolved.with_user_data = msg.with_user_data;
    }
    else {
      resolved.with_user_data = false
    }

    if (msg.with_grids !== undefined) {
      resolved.with_grids = msg.with_grids;
    }
    else {
      resolved.with_grids = false
    }

    if (msg.with_words !== undefined) {
      resolved.with_words = msg.with_words;
    }
    else {
      resolved.with_words = false
    }

    if (msg.with_global_descriptors !== undefined) {
      resolved.with_global_descriptors = msg.with_global_descriptors;
    }
    else {
      resolved.with_global_descriptors = false
    }

    return resolved;
    }
};

class GetMap2Response {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.data = null;
    }
    else {
      if (initObj.hasOwnProperty('data')) {
        this.data = initObj.data
      }
      else {
        this.data = new MapData();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type GetMap2Response
    // Serialize message field [data]
    bufferOffset = MapData.serialize(obj.data, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type GetMap2Response
    let len;
    let data = new GetMap2Response(null);
    // Deserialize message field [data]
    data.data = MapData.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += MapData.getMessageSize(object.data);
    return length;
  }

  static datatype() {
    // Returns string type for a service object
    return 'rtabmap_msgs/GetMap2Response';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '76e7e98705d080822083ef0a96245bb9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #response
    MapData data
    
    
    ================================================================================
    MSG: rtabmap_msgs/MapData
    
    Header header
    
    ##################
    # Optimized graph
    ##################
    MapGraph graph
    
    ##################
    # Graph data
    ##################
    Node[] nodes
    
    
    
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    ================================================================================
    MSG: rtabmap_msgs/MapGraph
    
    Header header
    
    ##
    # /map to /odom transform
    # Always identity when the graph is optimized from the latest pose.
    ##
    geometry_msgs/Transform mapToOdom
    
    # The poses
    int32[] posesId
    geometry_msgs/Pose[] poses
    
    # The links
    Link[] links
    
    
    
    
    ================================================================================
    MSG: geometry_msgs/Transform
    # This represents the transform between two coordinate frames in free space.
    
    Vector3 translation
    Quaternion rotation
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: rtabmap_msgs/Link
    #class rtabmap::Link
    #{
    #   int from;
    #   int to;
    #   Type type;
    #   Transform transform;
    #   cv::Mat(6,6,CV_64FC1) information;
    #}
    
    int32 fromId
    int32 toId
    int32 type
    geometry_msgs/Transform transform
    float64[36] information
    ================================================================================
    MSG: rtabmap_msgs/Node
    #class rtabmap::Signature
    
    int32 id
    int32 map_id
    int32 weight
    float64 stamp
    string label
    
    # Pose from odometry not corrected
    geometry_msgs/Pose pose
    
    # std::multimap<wordId, index>
    # std::vector<cv::Keypoint>
    # std::vector<cv::Point3f>
    int32[] word_id_keys
    int32[] word_id_values
    KeyPoint[] word_kpts
    Point3f[] word_pts
    # compressed descriptors
    # use rtabmap::util3d::uncompressData() from "rtabmap/core/util3d.h"
    uint8[] word_descriptors
    
    SensorData data
    
    ================================================================================
    MSG: rtabmap_msgs/KeyPoint
    #class cv::KeyPoint
    #{
    #    Point2f pt;
    #    float size;
    #    float angle;
    #    float response;
    #    int octave;
    #    int class_id;
    #}
    
    Point2f pt
    float32 size
    float32 angle
    float32 response
    int32 octave
    int32 class_id
    ================================================================================
    MSG: rtabmap_msgs/Point2f
    #class cv::Point2f
    #{
    #    float x;
    #    float y;
    #}
    
    float32 x
    float32 y
    ================================================================================
    MSG: rtabmap_msgs/Point3f
    #class cv::Point3f
    #{
    #    float x;
    #    float y;
    #    float z;
    #}
    
    float32 x
    float32 y
    float32 z
    ================================================================================
    MSG: rtabmap_msgs/SensorData
    #class rtabmap::SensorData
    
    Header header
    
    # For RGB-D, left corresponds to rgb camera, and right corresponds to depth camera.
    
    # Raw images
    sensor_msgs/Image left
    sensor_msgs/Image right
    
    # Compressed images
    # use rtabmap::util3d::uncompressImage() from "rtabmap/core/util3d.h"
    uint8[] left_compressed
    uint8[] right_compressed
    
    # Camera info
    sensor_msgs/CameraInfo[] left_camera_info
    sensor_msgs/CameraInfo[] right_camera_info
    
    # Transform from base frame to camera frame
    geometry_msgs/Transform[] local_transform
    
    # raw 2d or 3D laser scan
    sensor_msgs/PointCloud2 laser_scan
    # compressed 2D or 3D laser scan
    # use rtabmap::util3d::uncompressData() from "rtabmap/core/util3d.h"
    uint8[] laser_scan_compressed
    int32 laser_scan_max_pts
    float32 laser_scan_max_range
    int32 laser_scan_format
    # local transform (base frame -> laser frame)
    geometry_msgs/Transform laser_scan_local_transform
    
    # compressed user data
    # use rtabmap::util3d::uncompressData() from "rtabmap/core/util3d.h"
    uint8[] user_data
    
    # compressed occupancy grid
    # use rtabmap::util3d::uncompressData() from "rtabmap/core/util3d.h"
    uint8[] grid_ground
    uint8[] grid_obstacles
    uint8[] grid_empty_cells
    float32 grid_cell_size
    Point3f grid_view_point
    
    # Local features
    KeyPoint[] key_points
    Point3f[] points
    # compressed descriptors
    # use rtabmap::util3d::uncompressData() from "rtabmap/core/util3d.h"
    uint8[] descriptors
    
    GlobalDescriptor[] global_descriptors
    
    EnvSensor[] env_sensors
    
    sensor_msgs/Imu imu
    geometry_msgs/Transform imu_local_transform
    
    LandmarkDetection[] landmarks
    
    # Ground truth
    geometry_msgs/Pose ground_truth_pose
    
    # GPS
    GPS gps
    
    ================================================================================
    MSG: sensor_msgs/Image
    # This message contains an uncompressed image
    # (0, 0) is at top-left corner of image
    #
    
    Header header        # Header timestamp should be acquisition time of image
                         # Header frame_id should be optical frame of camera
                         # origin of frame should be optical center of camera
                         # +x should point to the right in the image
                         # +y should point down in the image
                         # +z should point into to plane of the image
                         # If the frame_id here and the frame_id of the CameraInfo
                         # message associated with the image conflict
                         # the behavior is undefined
    
    uint32 height         # image height, that is, number of rows
    uint32 width          # image width, that is, number of columns
    
    # The legal values for encoding are in file src/image_encodings.cpp
    # If you want to standardize a new string format, join
    # ros-users@lists.sourceforge.net and send an email proposing a new encoding.
    
    string encoding       # Encoding of pixels -- channel meaning, ordering, size
                          # taken from the list of strings in include/sensor_msgs/image_encodings.h
    
    uint8 is_bigendian    # is this data bigendian?
    uint32 step           # Full row length in bytes
    uint8[] data          # actual matrix data, size is (step * rows)
    
    ================================================================================
    MSG: sensor_msgs/CameraInfo
    # This message defines meta information for a camera. It should be in a
    # camera namespace on topic "camera_info" and accompanied by up to five
    # image topics named:
    #
    #   image_raw - raw data from the camera driver, possibly Bayer encoded
    #   image            - monochrome, distorted
    #   image_color      - color, distorted
    #   image_rect       - monochrome, rectified
    #   image_rect_color - color, rectified
    #
    # The image_pipeline contains packages (image_proc, stereo_image_proc)
    # for producing the four processed image topics from image_raw and
    # camera_info. The meaning of the camera parameters are described in
    # detail at http://www.ros.org/wiki/image_pipeline/CameraInfo.
    #
    # The image_geometry package provides a user-friendly interface to
    # common operations using this meta information. If you want to, e.g.,
    # project a 3d point into image coordinates, we strongly recommend
    # using image_geometry.
    #
    # If the camera is uncalibrated, the matrices D, K, R, P should be left
    # zeroed out. In particular, clients may assume that K[0] == 0.0
    # indicates an uncalibrated camera.
    
    #######################################################################
    #                     Image acquisition info                          #
    #######################################################################
    
    # Time of image acquisition, camera coordinate frame ID
    Header header    # Header timestamp should be acquisition time of image
                     # Header frame_id should be optical frame of camera
                     # origin of frame should be optical center of camera
                     # +x should point to the right in the image
                     # +y should point down in the image
                     # +z should point into the plane of the image
    
    
    #######################################################################
    #                      Calibration Parameters                         #
    #######################################################################
    # These are fixed during camera calibration. Their values will be the #
    # same in all messages until the camera is recalibrated. Note that    #
    # self-calibrating systems may "recalibrate" frequently.              #
    #                                                                     #
    # The internal parameters can be used to warp a raw (distorted) image #
    # to:                                                                 #
    #   1. An undistorted image (requires D and K)                        #
    #   2. A rectified image (requires D, K, R)                           #
    # The projection matrix P projects 3D points into the rectified image.#
    #######################################################################
    
    # The image dimensions with which the camera was calibrated. Normally
    # this will be the full camera resolution in pixels.
    uint32 height
    uint32 width
    
    # The distortion model used. Supported models are listed in
    # sensor_msgs/distortion_models.h. For most cameras, "plumb_bob" - a
    # simple model of radial and tangential distortion - is sufficient.
    string distortion_model
    
    # The distortion parameters, size depending on the distortion model.
    # For "plumb_bob", the 5 parameters are: (k1, k2, t1, t2, k3).
    float64[] D
    
    # Intrinsic camera matrix for the raw (distorted) images.
    #     [fx  0 cx]
    # K = [ 0 fy cy]
    #     [ 0  0  1]
    # Projects 3D points in the camera coordinate frame to 2D pixel
    # coordinates using the focal lengths (fx, fy) and principal point
    # (cx, cy).
    float64[9]  K # 3x3 row-major matrix
    
    # Rectification matrix (stereo cameras only)
    # A rotation matrix aligning the camera coordinate system to the ideal
    # stereo image plane so that epipolar lines in both stereo images are
    # parallel.
    float64[9]  R # 3x3 row-major matrix
    
    # Projection/camera matrix
    #     [fx'  0  cx' Tx]
    # P = [ 0  fy' cy' Ty]
    #     [ 0   0   1   0]
    # By convention, this matrix specifies the intrinsic (camera) matrix
    #  of the processed (rectified) image. That is, the left 3x3 portion
    #  is the normal camera intrinsic matrix for the rectified image.
    # It projects 3D points in the camera coordinate frame to 2D pixel
    #  coordinates using the focal lengths (fx', fy') and principal point
    #  (cx', cy') - these may differ from the values in K.
    # For monocular cameras, Tx = Ty = 0. Normally, monocular cameras will
    #  also have R = the identity and P[1:3,1:3] = K.
    # For a stereo pair, the fourth column [Tx Ty 0]' is related to the
    #  position of the optical center of the second camera in the first
    #  camera's frame. We assume Tz = 0 so both cameras are in the same
    #  stereo image plane. The first camera always has Tx = Ty = 0. For
    #  the right (second) camera of a horizontal stereo pair, Ty = 0 and
    #  Tx = -fx' * B, where B is the baseline between the cameras.
    # Given a 3D point [X Y Z]', the projection (x, y) of the point onto
    #  the rectified image is given by:
    #  [u v w]' = P * [X Y Z 1]'
    #         x = u / w
    #         y = v / w
    #  This holds for both images of a stereo pair.
    float64[12] P # 3x4 row-major matrix
    
    
    #######################################################################
    #                      Operational Parameters                         #
    #######################################################################
    # These define the image region actually captured by the camera       #
    # driver. Although they affect the geometry of the output image, they #
    # may be changed freely without recalibrating the camera.             #
    #######################################################################
    
    # Binning refers here to any camera setting which combines rectangular
    #  neighborhoods of pixels into larger "super-pixels." It reduces the
    #  resolution of the output image to
    #  (width / binning_x) x (height / binning_y).
    # The default values binning_x = binning_y = 0 is considered the same
    #  as binning_x = binning_y = 1 (no subsampling).
    uint32 binning_x
    uint32 binning_y
    
    # Region of interest (subwindow of full camera resolution), given in
    #  full resolution (unbinned) image coordinates. A particular ROI
    #  always denotes the same window of pixels on the camera sensor,
    #  regardless of binning settings.
    # The default setting of roi (all values 0) is considered the same as
    #  full resolution (roi.width = width, roi.height = height).
    RegionOfInterest roi
    
    ================================================================================
    MSG: sensor_msgs/RegionOfInterest
    # This message is used to specify a region of interest within an image.
    #
    # When used to specify the ROI setting of the camera when the image was
    # taken, the height and width fields should either match the height and
    # width fields for the associated image; or height = width = 0
    # indicates that the full resolution image was captured.
    
    uint32 x_offset  # Leftmost pixel of the ROI
                     # (0 if the ROI includes the left edge of the image)
    uint32 y_offset  # Topmost pixel of the ROI
                     # (0 if the ROI includes the top edge of the image)
    uint32 height    # Height of ROI
    uint32 width     # Width of ROI
    
    # True if a distinct rectified ROI should be calculated from the "raw"
    # ROI in this message. Typically this should be False if the full image
    # is captured (ROI not used), and True if a subwindow is captured (ROI
    # used).
    bool do_rectify
    
    ================================================================================
    MSG: sensor_msgs/PointCloud2
    # This message holds a collection of N-dimensional points, which may
    # contain additional information such as normals, intensity, etc. The
    # point data is stored as a binary blob, its layout described by the
    # contents of the "fields" array.
    
    # The point cloud data may be organized 2d (image-like) or 1d
    # (unordered). Point clouds organized as 2d images may be produced by
    # camera depth sensors such as stereo or time-of-flight.
    
    # Time of sensor data acquisition, and the coordinate frame ID (for 3d
    # points).
    Header header
    
    # 2D structure of the point cloud. If the cloud is unordered, height is
    # 1 and width is the length of the point cloud.
    uint32 height
    uint32 width
    
    # Describes the channels and their layout in the binary data blob.
    PointField[] fields
    
    bool    is_bigendian # Is this data bigendian?
    uint32  point_step   # Length of a point in bytes
    uint32  row_step     # Length of a row in bytes
    uint8[] data         # Actual point data, size is (row_step*height)
    
    bool is_dense        # True if there are no invalid points
    
    ================================================================================
    MSG: sensor_msgs/PointField
    # This message holds the description of one point entry in the
    # PointCloud2 message format.
    uint8 INT8    = 1
    uint8 UINT8   = 2
    uint8 INT16   = 3
    uint8 UINT16  = 4
    uint8 INT32   = 5
    uint8 UINT32  = 6
    uint8 FLOAT32 = 7
    uint8 FLOAT64 = 8
    
    string name      # Name of field
    uint32 offset    # Offset from start of point struct
    uint8  datatype  # Datatype enumeration, see above
    uint32 count     # How many elements in the field
    
    ================================================================================
    MSG: rtabmap_msgs/GlobalDescriptor
    
    Header header
    
    # compressed global descriptor
    # use rtabmap::util3d::uncompressData() from "rtabmap/core/util3d.h"
    int32 type
    uint8[] info
    uint8[] data
    ================================================================================
    MSG: rtabmap_msgs/EnvSensor
    
    Header header
    
    # EnvSensor
    int32 type
    float64 value
    ================================================================================
    MSG: sensor_msgs/Imu
    # This is a message to hold data from an IMU (Inertial Measurement Unit)
    #
    # Accelerations should be in m/s^2 (not in g's), and rotational velocity should be in rad/sec
    #
    # If the covariance of the measurement is known, it should be filled in (if all you know is the 
    # variance of each measurement, e.g. from the datasheet, just put those along the diagonal)
    # A covariance matrix of all zeros will be interpreted as "covariance unknown", and to use the
    # data a covariance will have to be assumed or gotten from some other source
    #
    # If you have no estimate for one of the data elements (e.g. your IMU doesn't produce an orientation 
    # estimate), please set element 0 of the associated covariance matrix to -1
    # If you are interpreting this message, please check for a value of -1 in the first element of each 
    # covariance matrix, and disregard the associated estimate.
    
    Header header
    
    geometry_msgs/Quaternion orientation
    float64[9] orientation_covariance # Row major about x, y, z axes
    
    geometry_msgs/Vector3 angular_velocity
    float64[9] angular_velocity_covariance # Row major about x, y, z axes
    
    geometry_msgs/Vector3 linear_acceleration
    float64[9] linear_acceleration_covariance # Row major x, y z 
    
    ================================================================================
    MSG: rtabmap_msgs/LandmarkDetection
    
    # header.stamp: the timestamp of the detection (e.g. image timestamp)
    # header.frame_id: the base frame of pose (e.g., camera optical frame)
    std_msgs/Header header
    
    # Landmark's frame id
    string landmark_frame_id
    
    # Landmark's unique ID: should be >0
    int32 id
    
    # Size in meters of the landmark/tag (optional, set 0 to not use it).
    float32 size
    
    # Pose of the landmark in header.frame_id frame.
    # If covariance is unknown, keep it as null matrix.
    # rtabmap_slam/rtabmap's landmark_angular_variance and
    # landmark_linear_variance parameters can be used
    # for convenience if covariance is null.
    geometry_msgs/PoseWithCovariance pose
    
    
    
    ================================================================================
    MSG: geometry_msgs/PoseWithCovariance
    # This represents a pose in free space with uncertainty.
    
    Pose pose
    
    # Row-major representation of the 6x6 covariance matrix
    # The orientation parameters use a fixed-axis representation.
    # In order, the parameters are:
    # (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    float64[36] covariance
    
    ================================================================================
    MSG: rtabmap_msgs/GPS
    
    float64 stamp      # in seconds
    float64 longitude  # DD format
    float64 latitude   # DD format
    float64 altitude   # in meters
    float64 error      # in meters
    float64 bearing    # North 0->360 deg
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new GetMap2Response(null);
    if (msg.data !== undefined) {
      resolved.data = MapData.Resolve(msg.data)
    }
    else {
      resolved.data = new MapData()
    }

    return resolved;
    }
};

module.exports = {
  Request: GetMap2Request,
  Response: GetMap2Response,
  md5sum() { return '3e23f9a253a7dd6dbe67701cee06fea3'; },
  datatype() { return 'rtabmap_msgs/GetMap2'; }
};
